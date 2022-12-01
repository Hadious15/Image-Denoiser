import { auth } from "../../Config";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";

export const usePasswordReset = () => {
  const [resetError, setError] = useState(null);

  const resetPass = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);

        // ..
      });
  };

  return { resetError, resetPass };
};
