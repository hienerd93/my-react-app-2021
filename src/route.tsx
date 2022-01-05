import { RequireAuth } from "auth";
import { AppPath } from "data";
import DashBoard from "pages/DashBoard";
import LayoutApp from "pages/LayoutApp";
import LoginPage from "pages/Login";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutApp />}>
        <Route path="/" element={<LoginPage />} />
        <Route
          path={AppPath.DASHBOARD}
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
