import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth, Home } from './pages/';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      return navigate('/home');
    } else {
      return navigate('/auth');
    }
  }, [user]);
  return null;
};

export default App;
