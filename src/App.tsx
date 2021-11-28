import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import LoginPage from "./Login/Login";
import AuthProvider from "./Login/store/AuthProvider";
import RequireAuth from "./Login/utils/requireAuth";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <DashBoard />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
