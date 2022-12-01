import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config";
const useUserState = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCurrentUser(undefined);
      } else {
        setCurrentUser(user);
      }
    });
  }, []);

  return { user: currentUser };
};

export default useUserState;
