import { Button, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth: any = useAuth();
  const { Paragraph } = Typography;

  const from = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signIn(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <Paragraph>You must log in to view the page at {from}</Paragraph>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
