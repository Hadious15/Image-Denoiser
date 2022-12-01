import React, { useState } from "react";
import { firestore } from "../../Config";
const updateDocument = async (collection, doc, value) => {
  const docRef = firestore.collection(collection).doc(doc);
  await docRef.update(value);
};
export default updateDocument;
