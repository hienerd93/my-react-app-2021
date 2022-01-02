import { Typography } from "antd";
import { useAuth } from "auth";
import { AppPath, AuthContextType } from "data";
import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth: AuthContextType = useAuth();
  const { Paragraph } = Typography;

  const from = location.state?.from?.pathname || AppPath.DASHBOARD;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
