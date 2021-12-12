import { AppPath } from "data";
import DashBoard from "pages/DashBoard";
import Layout from "pages/Layout";
import LoginPage from "pages/Login";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "utils";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
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
