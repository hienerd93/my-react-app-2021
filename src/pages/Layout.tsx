import { useAuth } from "auth";
import AuthStatus from "components/AuthStatus";
import { AppPath, AuthContextType } from "data";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from "services/pokemon";
import { decrement, increment } from "slices/counter";
import { RootState } from "store";

const Layout = () => {
  const auth: AuthContextType = useAuth();
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
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
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
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
