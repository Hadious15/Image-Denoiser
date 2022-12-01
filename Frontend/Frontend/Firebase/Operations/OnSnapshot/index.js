import { firestore } from "../../Config";

const onSnapShot = async (collection, doc, cb) => {
  const docRef = firestore.collection(collection).doc(doc);
  await docRef.onSnapshot((item) => {
    cb(item.data().postPop);
  });
};
export default onSnapShot;
