import { AuthContextType } from "core";
import { createContext, ReactNode, useState } from "react";
import { fakeAuthProvider } from "./fakeAuthProvider";

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>("");

  const signIn = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser("");
      callback();
    });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
