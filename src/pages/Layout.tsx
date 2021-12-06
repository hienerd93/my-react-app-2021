import { Link, Outlet, useNavigate } from "react-router-dom";
import AuthStatus from "../components/AuthStatus";
import { AuthContextType } from "../data/interfaces";
import useAuth from "../hooks/useAuth";

const Layout = () => {
  const auth: AuthContextType = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <AuthStatus auth={auth} onClick={() => navigate("/")} />

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
