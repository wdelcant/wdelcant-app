import db from "./firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  orderBy,
} from "firebase/firestore";

export const updateStock = async (id, stock) => {
  const product = doc(db, "products", id);

  await updateDoc(product, {
    stock: stock,
  });
};
