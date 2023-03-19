import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../config/firebase';
export const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Home</h1>
      <h2>{user?.email}</h2>
      <h2>{user?.displayName}</h2>
    </div>
  );
};
