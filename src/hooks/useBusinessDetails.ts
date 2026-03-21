import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export interface BusinessDetails {
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

const defaultDetails: BusinessDetails = {
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
};

export function useBusinessDetails() {
  const [details, setDetails] = useState<BusinessDetails>(defaultDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const docRef = doc(db, 'settings', 'businessDetails');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetails({ ...defaultDetails, ...docSnap.data() } as BusinessDetails);
        }
      } catch (err) {
        console.error('Error fetching business details:', err);
      }
      setLoading(false);
    };
    fetchDetails();
  }, []);

  return { details, loading };
}
