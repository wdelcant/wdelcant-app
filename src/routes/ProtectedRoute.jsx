import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Si el usuario no ha iniciado sesión, redirija a la página de inicio de sesión. De lo contrario, renderice el componente de ruta protegida.
export function ProtectedRoute({ children }) {
  const { user, Loader } = useAuth();

  if (Loader) return <Loader />;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
