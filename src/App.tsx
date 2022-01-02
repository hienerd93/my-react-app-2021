import React from "react";
import { Typography } from "antd";
import { AuthProvider } from "auth";
import AppRoutes from "route";
import { Provider } from "react-redux";
import { store } from "store";

const App = () => {
  const { Title } = Typography;

  return (
    <AuthProvider>
      <Provider store={store}>
        <Title>Pokemon Tab</Title>
        <AppRoutes />
      </Provider>
    </AuthProvider>
  );
};

export default App;
