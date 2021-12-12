import AuthStatus from "components/AuthStatus";
import { AppPath, AuthContextType } from "data";
import { useAuth } from "hooks";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const auth: AuthContextType = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <AuthStatus auth={auth} onClick={() => navigate("/")} />

      <ul>
        <li>
          <Link to={AppPath.DASHBOARD}>Dashboard</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
