import { firestore } from "../../Config";

const GetDocuments = async (collection) => {
  const docRef = firestore.collection(collection);

  const docSnapshot = await docRef.get();
  return docSnapshot.docs.map((item) => {
    const docData = item.data();
    return {
      id: item.id,
      ...docData,
    };
  });
};
export default GetDocuments;
