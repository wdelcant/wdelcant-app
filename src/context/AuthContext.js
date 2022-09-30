import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();

// UseAuth es un enlace personalizado que devuelve el objeto de contexto del componente AuthProvider.
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un  AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [Loader, setLoader] = useState(true);
  const navigate = useNavigate();

  // Crea un nuevo usuario con el correo electrónico y la contraseña proporcionados.
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  /*
  Toma un correo electrónico y una contraseña, y devuelve una promesa que resuelve el resultado de
  llamar a signInWithEmailAndPassword con el correo electrónico y la contraseña proporcionados.
  Si la autenticación es exitosa, la promesa se resuelve con un objeto de usuario.
 */
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => {
    /* crear una ventana emergente que le pregunta al usuario si desea cerrar la sesión. Si hacen clic en Sí, se cierra la sesión y se los
  lleva a la página de inicio. Si hacen clic en no, no hace nada. */
    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión!',
    }).then(result => {
      if (result.isConfirmed) {
        signOut(auth);
        navigate('/');
        Swal.fire('Adiós', 'Vuelve cuando quieras!.', 'success');
      }
    });
  };

  // iniciar sesión con Google.
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // restablecer la contraseña
  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  // Si el usuario ha iniciado sesión, devuelve la información del usuario; de lo contrario, devuelve nulo.
  const isUserLoggedIn = () => {
    return auth.currentUser;
  };

  // actualizar el perfil del usuario
  useEffect(() => {
    if (isUserLoggedIn()) {
      setUser(auth.currentUser);
    }
    setLoader(false);
  }, []);

  // Comprobando si el usuario ha iniciado sesión y, de ser así, se establece el usuario como el usuario actual.
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('click', () => {
              Swal.close();
            });
          },
        });
        Toast.fire({
          icon: 'success',
          title: `Hola ${currentUser.displayName || currentUser.email}`,
        });
      }
      setLoader(false);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        user,
        logOut,
        Loader,
        loginWithGoogle,
        resetPassword,
        isUserLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
