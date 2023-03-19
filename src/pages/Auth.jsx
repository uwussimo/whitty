import logo from '../assets/logo.svg';
import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect } from 'react';
import { Loading, Form } from '../components/ui';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [sign, setSign] = useState({
    email: '',
    password: '',
  });

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      return navigate('/home');
    }
  }, [user]);

  const handleChange = (e) => {
    setSign({
      ...sign,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async (e, provider = 'email') => {
    e.preventDefault();
    setLoading(true);
    try {
      if (provider === 'email') {
        await signInWithEmailAndPassword(auth, sign.email, sign.password);
      } else if (provider === 'google') {
        await signInWithPopup(auth, googleProvider);
      }
      console.log(auth.currentUser.email);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Form>
      <img src={logo} alt="logo" width={120} />
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit" onClick={(e) => signIn(e, 'email')}>
        {loading ? <Loading></Loading> : 'Sign in'}
      </button>

      <div>
        <p>or</p>
      </div>

      <button onClick={(e) => signIn(e, 'google')}>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
              width={20}
              height={20}
              alt="google logo"
              style={{ marginRight: '10px' }}
            />
            Sign in with Google
          </>
        )}
      </button>
    </Form>
  );
};
