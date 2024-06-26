import { Typography, Form, Input, Button } from "antd";
import { useAuth } from "auth";
import { AppPath, AuthContextType, User } from "core";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth: AuthContextType = useAuth();
  const { Paragraph } = Typography;

  const from = location.state?.from?.pathname || AppPath.DASHBOARD;

  const onFinish = (event: User) => {
    const { username, password } = event;

    auth.signIn({ username, password }, () => {
      navigate(from, { replace: true });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Paragraph>You must log in to view the page at {from}</Paragraph>

      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message:
                "Your password must has at least six characters with special and number",
            },
          ]}
        >
          <Input.Password placeholder="input password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
