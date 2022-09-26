import db from "./firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";

/* Obtiene un documento de la base de datos y, si existe, devuelve los datos del documento; de lo contrario, devuelve un objeto vacío.*/
export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: id };
  }
  return {};
};

/* Obtiene un documento de la base de datos y, si no existe, devuelve una cadena */
export const getItemInfoById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (typeof docSnap.data() === "undefined") {
    return "Producto no encontrado";
  }
  return { id: docSnap.id, ...docSnap.data() };
};

export const updateStock = async (id, stock) => {
  const product = doc(db, "products", id);

  await updateDoc(product, {
    stock: stock,
  });
};

export const searchOrder = async (id) => {
  const orderDoc = doc(db, "orders", id);
  const orderSnapshot = await getDoc(orderDoc);

  if (typeof orderSnapshot.data() === "undefined") {
    return "No order found";
  }
  return { id: orderSnapshot.id, ...orderSnapshot.data() };
};
