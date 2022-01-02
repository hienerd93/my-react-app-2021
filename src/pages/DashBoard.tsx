import { Typography } from "antd";
import { useGetPokemonByNameQuery } from "services/pokemon";

const DashBoard = () => {
  const { Text } = Typography;
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

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
    </>
  );
};

export default DashBoard;
