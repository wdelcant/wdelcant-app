import db from "./firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";


export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: id };
  }
  return {};
};

export const updateStock = async (id, stock) => {
  const product = doc(db, "products", id);

  await updateDoc(product, {
    stock: stock,
  });
};
