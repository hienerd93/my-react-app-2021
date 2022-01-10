import { RequireAuth } from "auth";
import { AppPath } from "core";
import App from "pages/App";
import DashBoard from "pages/DashBoard";
import LoginPage from "pages/Login";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
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
