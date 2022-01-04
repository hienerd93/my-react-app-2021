import { Typography } from "antd";
import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "services/pokemon";
import { RootState } from "store";

const DashBoard = () => {
  const { Text } = Typography;
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <Text strong>Protected</Text>;
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
      <span>{count}</span>
    </>
  );
};

export default DashBoard;
