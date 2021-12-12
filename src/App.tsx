import React from "react";
import { Typography } from "antd";
import { AuthProvider } from "store";
import AppRoutes from "routes";

const App = () => {
  const { Title } = Typography;

  return (
    <AuthProvider>
      <Title>Auth Example</Title>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
