import { useAuth } from "hooks";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
