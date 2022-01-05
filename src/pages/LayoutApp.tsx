import { useAuth } from "auth";
import AuthStatus from "components/AuthStatus";
import { AppPath, AuthContextType } from "data";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from "services/pokemon";
import { decrement, increment } from "slices/counter";
import { RootState } from "store";
import { Image, Typography, Layout, Menu, Button } from "antd";

const LayoutApp = () => {
  const auth: AuthContextType = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const { Title, Paragraph } = Typography;
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item key="dashboard">
            <Link to={AppPath.DASHBOARD}>Dashboard</Link>
          </Menu.Item>
        </Menu>
        <AuthStatus auth={auth} onClick={() => navigate("/")} />
      </Header>
      <Content>
        {location.pathname === "/" && (
          <>
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : (
              !!data && (
                <>
                  <Title>{data.species.name}</Title>
                  <Image
                    width={100}
                    src={data.sprites.front_shiny}
                    alt={data.species.name}
                    preview={false}
                  />
                </>
              )
            )}
            <Button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </Button>
            <Paragraph>{count}</Paragraph>
            <Button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </Button>
          </>
        )}

        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LayoutApp;
