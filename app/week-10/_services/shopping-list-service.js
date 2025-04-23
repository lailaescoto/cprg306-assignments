import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
      const itemsCollectionRef = collection(db, 'users', userId, 'items');
      const itemsSnapshot = await getDocs(itemsCollectionRef);
  
      const mappedItems = itemsSnapshot.docs.map((itemDoc) => ({
        id: itemDoc.id,
        ...itemDoc.data(),
      }));
  
      return mappedItems;
    } catch (error) {
      console.error('Error in getItems:', error);
    }
  };
  
  export const addItem = async (userId, item) => {
    try {
      const itemsCollectionRef = collection(db, 'users', userId, 'items');
      const docRef = await addDoc(itemsCollectionRef, item);
      return docRef.id;
    } catch (error) {
      console.error('Error in addItem:', error);
    }
  };
  