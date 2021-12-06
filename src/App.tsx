import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/Login";
import AuthProvider from "./store/AuthProvider";
import RequireAuth from "./utils/requireAuth";
import Layout from "./pages/Layout";
import { Typography } from "antd";

const App = () => {
  const { Title } = Typography;

  return (
    <AuthProvider>
      <Title>Auth Example</Title>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
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
