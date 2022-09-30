import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children }) {
  const { user, Loader } = useAuth();

  if (Loader) return <Loader />;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
