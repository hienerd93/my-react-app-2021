import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const AuthStatus = () => {
  let auth: any = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signOut(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default AuthStatus;
