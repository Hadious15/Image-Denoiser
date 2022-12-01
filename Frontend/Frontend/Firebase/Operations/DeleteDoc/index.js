import React, { useState } from "react";
import { firestore } from "../../Config";
const DeleteDocument = async (collection, doc) => {
  const docRef = firestore.collection(collection).doc(doc);
  await docRef.delete();
};
export default DeleteDocument;
