import { firestore } from "../../Config";

const GetDocument = async (collection, doc) => {
  const docRef = firestore.collection(collection).doc(doc);
  const docSnapshot = await docRef.get();
  return docSnapshot.data();
};
export default GetDocument;
