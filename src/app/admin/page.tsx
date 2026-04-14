'use client';

import { useState, useEffect, useCallback } from 'react';
import { db, auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import {
  ImagePlus,
  Trash2,
  Save,
  FolderOpen,
  MapPin,
  Phone,
  Mail,
  Building2,
  Loader2,
  CheckCircle,
  AlertCircle,
  LayoutDashboard,
  Image as ImageIcon,
  Briefcase,
  Settings,
  LogOut,
  Eye,
  Edit2,
} from 'lucide-react';
import Link from 'next/link';
import TrianglePattern from '@/components/TrianglePattern';

/* ─── Types ─── */
interface GalleryProject {
  id: string;
  projectName: string;
  category?: 'Construction' | 'Interior Designing';
  images: { url: string; publicId: string }[];
  createdAt?: unknown;
}

interface Project {
  id: string;
  projectName: string;
  location: string;
  description?: string;
  status: string;
  images: { url: string; publicId: string }[];
  createdAt?: unknown;
}

interface BusinessDetails {
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  ownerName: string;
  ownerTitle: string;
  companyName: string;
  workingHours: string;
  whatsapp: string;
}

type Tab = 'gallery' | 'projects' | 'cms';

/* ─── Toast Notification ─── */
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-6 right-6 z-[999] flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl text-white text-sm font-bold animate-slide-in ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
      {type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
      {message}
    </div>
  );
}

/* ─── Admin Login Gate ─── */
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!auth) throw new Error("Firebase Auth is not initialized correctly.");
      await signInWithEmailAndPassword(auth, email.trim(), password);
      localStorage.setItem('magizh_admin', 'true');
      onLogin();
    } catch (err: unknown) {
      console.error(err);
      setError('Invalid email or password. Verify authentication rules inside your Firebase console.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1B6644] flex items-center justify-center px-6 relative overflow-hidden">
      <TrianglePattern opacity="opacity-[0.08]" />
      
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

      <div className="bg-[#13261E]/80 backdrop-blur-xl border border-white/10 p-12 max-w-md w-full rounded-xl relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <Building2 size={48} className="text-accent mx-auto mb-4" />
          <h1 className="text-white text-3xl font-serif font-bold bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">Admin Login</h1>
          <p className="text-accent text-[10px] tracking-[0.3em] font-sans font-black uppercase mt-2">MAGIZH BUILDERS CMS</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
              placeholder="e.g. admin@domain.com"
              required
            />
          </div>
          <div>
            <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
              placeholder="Enter password"
              required
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-accent text-primary py-4 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? 'Verifying...' : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Client-side Image Compressor ─── */
function compressImage(file: File, maxWidth = 2048, maxHeight = 2048, quality = 0.8): Promise<File> {
  return new Promise((resolve, reject) => {
    // If file is already small enough (<2MB) and not too large in dimensions, skip compression
    if (file.size < 2 * 1024 * 1024) {
      resolve(file);
      return;
    }

    const img = new window.Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);

      let { width, height } = img;

      // Scale down if exceeding max dimensions (preserves aspect ratio)
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('Canvas context failed')); return; }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) { reject(new Error('Compression failed')); return; }
          const compressedFile = new File([blob], file.name.replace(/\.\w+$/, '.jpg'), {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });
          console.log(`Compressed: ${(file.size / 1024 / 1024).toFixed(1)}MB → ${(compressedFile.size / 1024 / 1024).toFixed(1)}MB`);
          resolve(compressedFile);
        },
        'image/jpeg',
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image for compression'));
    };

    img.src = url;
  });
}

/* ─── Image Uploader ─── */
function ImageUploader({ folder, onUpload }: { folder: string; onUpload: (img: { url: string; publicId: string }) => void }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    for (let i = 0; i < files.length; i++) {
      setProgress(`${i + 1}/${files.length}`);

      try {
        // Compress image client-side before uploading (handles 40MB+ images)
        const compressed = await compressImage(files[i]);

        const formData = new FormData();
        formData.append('file', compressed);
        formData.append('folder', folder);

        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (data.url) {
          onUpload({ url: data.url, publicId: data.publicId });
        } else {
          console.error('Upload response error:', data.error);
        }
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }
    setUploading(false);
    setProgress('');
    e.target.value = '';
  };

  return (
    <label className="flex items-center gap-3 px-5 py-3 bg-accent/10 border-2 border-dashed border-accent/30 rounded-lg cursor-pointer hover:bg-accent/20 transition-all text-accent text-sm font-bold">
      {uploading ? <Loader2 size={16} className="animate-spin" /> : <ImagePlus size={16} />}
      {uploading ? `Uploading ${progress}...` : 'Add Images'}
      <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" disabled={uploading} />
    </label>
  );
}

/* ─── Main Admin Dashboard ─── */
export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('gallery');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editCategory, setEditCategory] = useState<'Construction' | 'Interior Designing'>('Construction');

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  /* Gallery State */
  const [galleryProjects, setGalleryProjects] = useState<GalleryProject[]>([]);
  const [newGalleryName, setNewGalleryName] = useState('');
  const [newGalleryCategory, setNewGalleryCategory] = useState<'Construction' | 'Interior Designing'>('Construction');
  const [newGalleryImages, setNewGalleryImages] = useState<{ url: string; publicId: string }[]>([]);
  
  /* Projects State */
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectLocation, setNewProjectLocation] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectStatus, setNewProjectStatus] = useState('Ongoing');
  const [newProjectImages, setNewProjectImages] = useState<{ url: string; publicId: string }[]>([]);

  /* CMS State */
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails>({
    phone1: '+91 87547 64403',
    phone2: '+91 78670 18940',
    email: 'magizhbuilder@gmail.com',
    address: '46/2, 1st Floor, Swamy Towers, Mayor Nagar, Peramanur',
    city: 'Salem',
    state: 'Tamil Nadu',
    pincode: '636 007',
    ownerName: 'Er. S. P. Hari Baaskar',
    ownerTitle: 'Registered Civil Engineer',
    companyName: 'MAGIZH BUILDERS',
    workingHours: 'Mon-Sat: 09AM-07PM',
    whatsapp: '918754764403',
  });

  const [loading, setLoading] = useState(false);

  /* Auth Check */
  useEffect(() => {
    if (localStorage.getItem('magizh_admin') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  /* Fetch Data */
  const fetchGallery = useCallback(async () => {
    try {
      const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as GalleryProject[];
      setGalleryProjects(data);
    } catch (err) {
      console.error('Error fetching gallery:', err);
    }
  }, []);

  const fetchProjects = useCallback(async () => {
    try {
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Project[];
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  }, []);

  const fetchBusinessDetails = useCallback(async () => {
    try {
      const docRef = doc(db, 'settings', 'businessDetails');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBusinessDetails(docSnap.data() as BusinessDetails);
      }
    } catch (err) {
      console.error('Error fetching business details:', err);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchGallery();
      fetchProjects();
      fetchBusinessDetails();
    }
  }, [authenticated, fetchGallery, fetchProjects, fetchBusinessDetails]);

  /* ─── Gallery Actions ─── */
  const addGalleryProject = async () => {
    if (!newGalleryName.trim() || newGalleryImages.length === 0) {
      setToast({ message: 'Please add project name and at least one image', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'gallery'), {
        projectName: newGalleryName.trim(),
        category: newGalleryCategory,
        images: newGalleryImages,
        createdAt: serverTimestamp(),
      });
      setNewGalleryName('');
      setNewGalleryCategory('Construction');
      setNewGalleryImages([]);
      await fetchGallery();
      setToast({ message: 'Gallery project added successfully!', type: 'success' });
    } catch (err) {
      console.error(err);
      setToast({ message: 'Failed to add gallery project', type: 'error' });
    }
    setLoading(false);
  };

  const deleteGalleryProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'gallery', id));
      await fetchGallery();
      setToast({ message: 'Gallery project deleted', type: 'success' });
    } catch (err: any) {
      console.error(err);
      alert('Delete Error: ' + (err.message || 'Check console'));
      setToast({ message: 'Failed to delete', type: 'error' });
    }
  };

  const removeGalleryImage = async (projectId: string, imageIndex: number) => {
    const project = galleryProjects.find((p) => p.id === projectId);
    if (!project) return;
    const updatedImages = project.images.filter((_, i) => i !== imageIndex);
    try {
      await updateDoc(doc(db, 'gallery', projectId), { images: updatedImages });
      await fetchGallery();
      setToast({ message: 'Image removed', type: 'success' });
    } catch (err) {
      console.error(err);
    }
  };

  const addImageToGalleryProject = async (projectId: string, img: { url: string; publicId: string }) => {
    const project = galleryProjects.find((p) => p.id === projectId);
    if (!project) return;
    const updatedImages = [...project.images, img];
    try {
      await updateDoc(doc(db, 'gallery', projectId), { images: updatedImages });
      await fetchGallery();
      setToast({ message: 'Image added to project', type: 'success' });
    } catch (err) {
      console.error(err);
    }
  };

  /* ─── Projects Actions ─── */
  const addProject = async () => {
    if (!newProjectName.trim() || !newProjectLocation.trim()) {
      setToast({ message: 'Please fill project name and location', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'projects'), {
        projectName: newProjectName.trim(),
        location: newProjectLocation.trim(),
        description: newProjectDescription.trim(),
        status: newProjectStatus,
        images: newProjectImages,
        createdAt: serverTimestamp(),
      });
      setNewProjectName('');
      setNewProjectLocation('');
      setNewProjectDescription('');
      setNewProjectStatus('Ongoing');
      setNewProjectImages([]);
      await fetchProjects();
      setToast({ message: 'Project added successfully!', type: 'success' });
    } catch (err) {
      console.error(err);
      setToast({ message: 'Failed to add project', type: 'error' });
    }
    setLoading(false);
  };

  const deleteProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
      await fetchProjects();
      setToast({ message: 'Project deleted', type: 'success' });
    } catch (err: any) {
      console.error(err);
      alert('Delete Error: ' + (err.message || 'Check console'));
      setToast({ message: 'Failed to delete', type: 'error' });
    }
  };

  const removeProjectImage = async (projectId: string, imageIndex: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;
    const updatedImages = project.images.filter((_, i) => i !== imageIndex);
    try {
      await updateDoc(doc(db, 'projects', projectId), { images: updatedImages });
      await fetchProjects();
      setToast({ message: 'Image removed', type: 'success' });
    } catch (err) {
      console.error(err);
    }
  };

  const addImageToProject = async (projectId: string, img: { url: string; publicId: string }) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;
    const updatedImages = [...project.images, img];
    try {
      await updateDoc(doc(db, 'projects', projectId), { images: updatedImages });
      await fetchProjects();
      setToast({ message: 'Image added to project', type: 'success' });
    } catch (err) {
      console.error(err);
    }
  };
  const updateGalleryProjectName = async (id: string) => {
    try {
      await updateDoc(doc(db, 'gallery', id), { projectName: editName.trim(), category: editCategory });
      await fetchGallery();
      setEditingId(null);
      setToast({ message: 'Project name updated!', type: 'success' });
    } catch (err) {
      console.error(err);
    }
  };

  const updateProjectDetails = async (id: string) => {
    try {
      await updateDoc(doc(db, 'projects', id), { 
        projectName: editName.trim(), 
        location: editLocation.trim(), 
        description: editDescription.trim(),
        status: editStatus 
      });
      await fetchProjects();
      setEditingId(null);
      setToast({ message: 'Project details updated!', type: 'success' });
    } catch (err) {
      console.error(err);
    }
  };
  /* ─── CMS Actions ─── */
  const saveBusinessDetails = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'settings', 'businessDetails'), businessDetails);
      setToast({ message: 'Business details saved successfully!', type: 'success' });
    } catch (err) {
      console.error(err);
      setToast({ message: 'Failed to save business details', type: 'error' });
    }
    setLoading(false);
  };



  const handleCmsChange = (field: keyof BusinessDetails, value: string) => {
    setBusinessDetails((prev) => ({ ...prev, [field]: value }));
  };

  /* ─── Render ─── */
  if (!authenticated) return <AdminLogin onLogin={() => setAuthenticated(true)} />;

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'gallery', label: 'Gallery', icon: <ImageIcon size={18} /> },
    { key: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { key: 'cms', label: 'Business Info', icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#1B6644] text-white relative overflow-hidden">
      <TrianglePattern opacity="opacity-[0.04]" />

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#15271F]/80 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={24} className="text-accent" />
            <div>
              <h2 className="text-white font-serif font-bold text-lg">Admin Panel</h2>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Magizh Builders</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all border-l-4 ${
                activeTab === tab.key
                  ? 'bg-accent/10 border-accent text-accent rounded-l-none'
                  : 'border-transparent text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-white/50 hover:text-white hover:bg-white/5 transition-all"
          >
            <Eye size={18} />
            View Website
          </Link>
          <button
            onClick={() => { localStorage.removeItem('magizh_admin'); setAuthenticated(false); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-red-400/70 hover:text-red-400 hover:bg-red-400/5 transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">

          {/* ═══════════ GALLERY TAB ═══════════ */}
          {activeTab === 'gallery' && (
            <div>
              <div className="mb-10">
                <h1 className="text-3xl font-serif font-bold mb-2">Gallery Management</h1>
                <p className="text-white/40 text-sm">Add projects to your gallery with images</p>
              </div>

              {/* Add New Gallery Project */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <FolderOpen size={18} className="text-accent" />
                  New Gallery Project
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Project Name</label>
                    <input
                      type="text"
                      value={newGalleryName}
                      onChange={(e) => setNewGalleryName(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
                      placeholder="e.g. Villa Project - Salem"
                    />
                  </div>

                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Category</label>
                    <select
                      value={newGalleryCategory}
                      onChange={(e) => setNewGalleryCategory(e.target.value as 'Construction' | 'Interior Designing')}
                      className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all select-none"
                    >
                      <option value="Construction" className="bg-[#1B6644]">Construction</option>
                      <option value="Interior Designing" className="bg-[#1B6644]">Interior Designing</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Images</label>
                    <ImageUploader folder="gallery" onUpload={(img) => setNewGalleryImages((prev) => [...prev, img])} />
                    {newGalleryImages.length > 0 && (
                      <div className="grid grid-cols-4 gap-3 mt-4">
                        {newGalleryImages.map((img, i) => (
                          <div key={i} className="relative group rounded-lg overflow-hidden aspect-square">
                            <img src={img.url} alt="" className="w-full h-full object-cover" />
                            <button
                              onClick={() => setNewGalleryImages((prev) => prev.filter((_, idx) => idx !== i))}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={addGalleryProject}
                    disabled={loading}
                    className="bg-accent text-primary px-8 py-3 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                    Add to Gallery
                  </button>
                </div>
              </div>

              {/* Existing Gallery Projects */}
              <div className="space-y-6">
                {galleryProjects.map((project) => (
                  <div key={project.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      {editingId === project.id ? (
                        <div className="flex-1 mr-4 bg-[#13261E]/80 p-5 rounded-xl border border-accent/20 space-y-3 shadow-xl">
                          <div>
                            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1 font-sans">Project Name</label>
                            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full bg-white/5 border border-white/10 text-white text-sm font-bold px-3 py-2 rounded-lg focus:outline-none focus:border-accent" />
                          </div>
                          <div>
                            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1 font-sans">Category</label>
                            <select value={editCategory} onChange={(e) => setEditCategory(e.target.value as 'Construction' | 'Interior Designing')} className="w-full bg-white/5 border border-white/10 text-white text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-accent">
                              <option value="Construction" className="bg-[#1B6644]">Construction</option>
                              <option value="Interior Designing" className="bg-[#1B6644]">Interior Designing</option>
                            </select>
                          </div>
                          <div className="flex gap-2 pt-1">
                            <button onClick={() => updateGalleryProjectName(project.id)} className="bg-accent text-primary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">Save</button>
                            <button onClick={() => setEditingId(null)} className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <h4 className="text-lg font-bold">{project.projectName}</h4>
                      )}
                      
                      <div className="flex items-center gap-2">
                        {editingId !== project.id && (
                          <button onClick={() => { setEditingId(project.id); setEditName(project.projectName); setEditCategory(project.category || 'Construction'); }} className="text-white/40 hover:text-accent p-2">
                            <Edit2 size={16} />
                          </button>
                        )}
                        <ImageUploader folder="gallery" onUpload={(img) => addImageToGalleryProject(project.id, img)} />
                        <button onClick={() => deleteGalleryProject(project.id)} className="text-red-400 hover:text-red-300 p-2">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {project.images.map((img, i) => (
                        <div key={i} className="relative group rounded-lg overflow-hidden aspect-square">
                          <img src={img.url} alt="" className="w-full h-full object-cover" />
                          <button
                            onClick={() => removeGalleryImage(project.id, i)}
                            className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-500 text-white p-1.5 rounded-full shadow-lg transition-all"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                    {project.images.length === 0 && <p className="text-white/30 text-sm italic">No images uploaded yet</p>}
                  </div>
                ))}
                {galleryProjects.length === 0 && (
                  <div className="text-center py-20 text-white/30">
                    <ImageIcon size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No gallery projects yet. Add your first one above.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════ PROJECTS TAB ═══════════ */}
          {activeTab === 'projects' && (
            <div>
              <div className="mb-10">
                <h1 className="text-3xl font-serif font-bold mb-2">Projects Management</h1>
                <p className="text-white/40 text-sm">Manage live and ongoing construction projects</p>
              </div>

              {/* Add New Project */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Briefcase size={18} className="text-accent" />
                  New Project
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Project Name</label>
                      <input
                        type="text"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
                        placeholder="e.g. Premium Villa"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Location</label>
                      <input
                        type="text"
                        value={newProjectLocation}
                        onChange={(e) => setNewProjectLocation(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
                        placeholder="e.g. Salem"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Description</label>
                      <input
                        type="text"
                        value={newProjectDescription}
                        onChange={(e) => setNewProjectDescription(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
                        placeholder="e.g. A luxurious 4BHK villa layout"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Status</label>
                      <select
                        value={newProjectStatus}
                        onChange={(e) => setNewProjectStatus(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all"
                      >
                        <option value="Ongoing" className="bg-[#1B6644]">Ongoing</option>
                        <option value="Completed" className="bg-[#1B6644]">Completed</option>
                        <option value="Upcoming" className="bg-[#1B6644]">Upcoming</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2">Images</label>
                    <ImageUploader folder="projects" onUpload={(img) => setNewProjectImages((prev) => [...prev, img])} />
                    {newProjectImages.length > 0 && (
                      <div className="grid grid-cols-4 gap-3 mt-4">
                        {newProjectImages.map((img, i) => (
                          <div key={i} className="relative group rounded-lg overflow-hidden aspect-square">
                            <img src={img.url} alt="" className="w-full h-full object-cover" />
                            <button
                              onClick={() => setNewProjectImages((prev) => prev.filter((_, idx) => idx !== i))}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={addProject}
                    disabled={loading}
                    className="bg-accent text-primary px-8 py-3 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                    Add Project
                  </button>
                </div>
              </div>

              {/* Existing Projects */}
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      {editingId === project.id ? (
                        <div className="flex-1 space-y-3 mr-4 bg-[#13261E]/80 p-5 rounded-xl border border-accent/30 shadow-2xl">
                          <div>
                            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1 font-sans">Project Name</label>
                            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full bg-white/5 border border-white/10 text-white text-sm font-bold px-3 py-2 rounded-lg focus:outline-none focus:border-accent" placeholder="Project Name" />
                          </div>
                          <div>
                            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1 font-sans">Location</label>
                            <input type="text" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} className="w-full bg-white/5 border border-white/10 text-white text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-accent" placeholder="Location" />
                          </div>
                          <div>
                            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1 font-sans">Description</label>
                            <input type="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="w-full bg-white/5 border border-white/10 text-white text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-accent" placeholder="Description" />
                          </div>
                          <div>
                            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1 font-sans">Status</label>
                            <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className="w-full bg-white/5 border border-white/10 text-white text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-accent">
                              <option value="Ongoing" className="bg-[#1B6644]">Ongoing</option>
                              <option value="Completed" className="bg-[#1B6644]">Completed</option>
                              <option value="Upcoming" className="bg-[#1B6644]">Upcoming</option>
                            </select>
                          </div>
                          <div className="flex gap-2 pt-1">
                            <button onClick={() => updateProjectDetails(project.id)} className="bg-accent text-primary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">Save</button>
                            <button onClick={() => setEditingId(null)} className="bg-white/10 px-4 py-2 rounded-lg text-xs uppercase tracking-widest">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-lg font-bold">{project.projectName}</h4>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-white/40 text-sm flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                              project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-400' :
                              project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        {editingId !== project.id && (
                          <button onClick={() => { setEditingId(project.id); setEditName(project.projectName); setEditLocation(project.location); setEditStatus(project.status); setEditDescription(project.description || ''); }} className="text-white/40 hover:text-accent p-2">
                            <Edit2 size={16} />
                          </button>
                        )}
                        <ImageUploader folder="projects" onUpload={(img) => addImageToProject(project.id, img)} />
                        <button onClick={() => deleteProject(project.id)} className="text-red-400 hover:text-red-300 p-2">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {project.images.map((img, i) => (
                        <div key={i} className="relative group rounded-lg overflow-hidden aspect-square">
                          <img src={img.url} alt="" className="w-full h-full object-cover" />
                          <button
                            onClick={() => removeProjectImage(project.id, i)}
                            className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-500 text-white p-1.5 rounded-full shadow-lg transition-all"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                    {project.images.length === 0 && <p className="text-white/30 text-sm italic">No images uploaded yet</p>}
                  </div>
                ))}
                {projects.length === 0 && (
                  <div className="text-center py-20 text-white/30">
                    <Briefcase size={48} className="mx-auto mb-4 opacity-30" />
                    <p>No projects yet. Add your first one above.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════ CMS TAB ═══════════ */}
          {activeTab === 'cms' && (
            <div>
              <div className="mb-10">
                <h1 className="text-3xl font-serif font-bold mb-2">Business Information</h1>
                <p className="text-white/40 text-sm">Update your company details displayed on the website</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="space-y-8">

                  {/* Company Info */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-accent">
                      <Building2 size={18} />
                      Company Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Working Hours" value={businessDetails.workingHours} onChange={(v) => handleCmsChange('workingHours', v)} />
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-accent">
                      <Phone size={18} />
                      Contact Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Phone 1" value={businessDetails.phone1} onChange={(v) => handleCmsChange('phone1', v)} />
                      <InputField label="Phone 2" value={businessDetails.phone2} onChange={(v) => handleCmsChange('phone2', v)} />
                      <InputField 
                        label="WhatsApp Number" 
                        value={businessDetails.whatsapp} 
                        onChange={(v) => handleCmsChange('whatsapp', v.replace(/\D/g, ""))} 
                        helpText="Numbers only with Country Code. DO NOT use + or spaces (e.g., 918754764403)" 
                      />
                      <InputField label="Email Address" value={businessDetails.email} onChange={(v) => handleCmsChange('email', v)} icon={<Mail size={16} />} />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-accent">
                      <MapPin size={18} />
                      Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-3">
                        <InputField label="Street Address" value={businessDetails.address} onChange={(v) => handleCmsChange('address', v)} />
                      </div>
                      <InputField label="City" value={businessDetails.city} onChange={(v) => handleCmsChange('city', v)} />
                      <InputField label="State" value={businessDetails.state} onChange={(v) => handleCmsChange('state', v)} />
                      <InputField label="Pincode" value={businessDetails.pincode} onChange={(v) => handleCmsChange('pincode', v)} />
                    </div>
                  </div>

                  <button
                    onClick={saveBusinessDetails}
                    disabled={loading}
                    className="bg-accent text-primary px-10 py-4 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                    Save All Changes
                  </button>
                </div>
              </div>
            </div>
          )}


        </div>
      </main>

      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

/* ─── Reusable Input Field ─── */
function InputField({ label, value, onChange, icon, helpText }: { label: string; value: string; onChange: (v: string) => void; icon?: React.ReactNode; helpText?: string }) {
  return (
    <div>
      <label className="text-white/60 text-xs uppercase tracking-widest font-bold block mb-2 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-accent transition-all placeholder:text-white/30"
      />
      {helpText && <p className="text-accent/60 text-[10px] mt-1 font-sans">{helpText}</p>}
    </div>
  );
}
