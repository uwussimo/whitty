import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading) {
      if (!user) {
        return navigate('/auth');
      } else {
        return navigate('/home');
      }
    }
  }, [user, navigate]);
  return null;
};

export default App;
