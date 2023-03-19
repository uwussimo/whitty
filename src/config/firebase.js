const firebaseConfig = {
  apiKey: 'AIzaSyAI-hjfJ6WwDMHB1PcJAyxEJk16UGPpgTw',
  authDomain: 'whitty-7c14c.firebaseapp.com',
  projectId: 'whitty-7c14c',
  storageBucket: 'whitty-7c14c.appspot.com',
  messagingSenderId: '752203532831',
  appId: '1:752203532831:web:4ad27b116149e11923a32a',
  measurementId: 'G-MB0X9CJMFS',
};

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
