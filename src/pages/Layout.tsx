import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../Login/components/AuthStatus";

const Layout = () => {
  return (
    <div>
      <AuthStatus />

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
