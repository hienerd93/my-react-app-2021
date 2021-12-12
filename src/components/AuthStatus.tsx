import { Button, Typography } from "antd";
import { AuthContextType } from "data";

type AuthStatusProps = {
  auth: AuthContextType;
  onClick: () => void;
};

const AuthStatus = ({ auth, onClick }: AuthStatusProps) => {
  const { Paragraph } = Typography;
  if (!auth.user) {
    return <Paragraph>You are not logged in.</Paragraph>;
  }

  return (
    <Paragraph>
      Welcome {auth.user}!{" "}
      <Button
        onClick={() => {
          auth.signOut(() => onClick());
        }}
      >
        Sign out
      </Button>
    </Paragraph>
  );
};

export default AuthStatus;
