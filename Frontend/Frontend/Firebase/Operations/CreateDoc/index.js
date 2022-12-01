import { firestore } from "../../Config";
const CreateDoc = async (collection, data) => {
  const docRef = firestore.collection(collection);
  const doc = await docRef.add(data);
  return doc;
};
export default CreateDoc;
