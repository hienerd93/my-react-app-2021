import { useContext } from "react";
import { AuthContext } from "store";

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
