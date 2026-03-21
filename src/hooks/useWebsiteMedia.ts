import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export function useWebsiteMedia() {
  const [media, setMedia] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const docRef = doc(db, 'settings', 'websiteMedia');
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setMedia(snap.data() as Record<string, string>);
        }
      } catch (err) {
        console.error('Error fetching Website Media:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  return { media, loading };
}
