import { Typography, Form, Input, Button } from "antd";
import { useAuth } from "auth";
import { AppPath, AuthContextType } from "data";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth: AuthContextType = useAuth();
  const { Paragraph } = Typography;

  const from = location.state?.from?.pathname || AppPath.DASHBOARD;

  const onFinish = (event: { username: string }) => {
    const { username } = event;

    auth.signIn(username, () => {
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
        labelCol={{ span: 8 }}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
