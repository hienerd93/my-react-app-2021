import React from "react";
import { Typography } from "antd";
import { AuthProvider } from "auth";
import AppRoutes from "route";
import { Provider } from "react-redux";
import { store } from "store";

const App = () => {
  const { Title } = Typography;

  return (
    <Provider store={store}>
      <AuthProvider>
        <Title>Pokemon Tab</Title>
        <AppRoutes />
      </AuthProvider>
    </Provider>
  );
};

export default App;
