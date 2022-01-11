import { AuthContextType, AUTHOR, User } from "core";
import { createContext, ReactNode, useState } from "react";
import { fakeAuthProvider } from "./fakeAuthProvider";

export const AuthContext = createContext<AuthContextType>(null!);

const defaultValueUser = { username: "", password: "" };

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultValueUser);

  const signIn = (newUser: User, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      const checkUser = JSON.stringify(newUser) === JSON.stringify(AUTHOR);
      // const checkUser = newUser.username === AUTHOR.username;
      setUser(checkUser ? newUser : defaultValueUser);
      callback();
    });
  };

  const signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(defaultValueUser);
      callback();
    });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
