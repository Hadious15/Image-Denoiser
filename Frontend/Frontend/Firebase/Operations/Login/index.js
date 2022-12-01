import { auth } from "../../Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Cookie from "universal-cookie";
export const useLogin = () => {
  const [logInError, setError] = useState(null);
  const cookies = new Cookie();
  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        cookies.set("isAuth", "true", { path: "/" });
        cookies.set("userId", res.user.uid, { path: "/" });
        // cookies.set("id", res.user.uid, {
        //   path: "/",
        //   expires: new Date("2023/03/09"),
        // });
      })
      .catch((err) => {
        switch (err.message) {
          case "Firebase: Error (auth/user-not-found).":
            setError("User-not-found: Wrong Email/Password");
            break;
          default:
            setError(
              "Something went wrong please try again or contact the owner"
            );
            break;
        }
      });
  };
  return { logInError, login };
};
