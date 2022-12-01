import { firestore } from "../../Config";
import { where } from "firebase/firestore";
const QueryDocument = async (collection, variable, value) => {
  var docRef = firestore.collection(collection).where(variable, "==", value);
  const docSnapshot = await docRef.get();
  return docSnapshot.docs.map((item) => {
    const docData = item.data();
    return {
      id: item.id,
      ...docData,
    };
  });
};
export default QueryDocument;
