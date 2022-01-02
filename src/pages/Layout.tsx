import { useAuth } from "auth";
import AuthStatus from "components/AuthStatus";
import { AppPath, AuthContextType } from "data";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from "services/pokemon";

const Layout = () => {
  const auth: AuthContextType = useAuth();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div>
      <AuthStatus auth={auth} onClick={() => navigate("/")} />

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <ul>
        <li>
          <Link to={AppPath.DASHBOARD}>Dashboard</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
