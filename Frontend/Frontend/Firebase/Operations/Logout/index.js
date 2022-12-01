import { auth } from "../../Config";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
export const UseLogout = () => {
  const logout = () => signOut(auth);
  
  return { logout };
};
