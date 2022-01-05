import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "services/pokemon";
import { RootState } from "store";
import { Image, Typography } from "antd";
import { getRestOfYear } from "utils";

const DashBoard = () => {
  const { Text, Title, Paragraph } = Typography;
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <Text strong>Protected</Text>
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
            />
          </>
        )
      )}
      <Paragraph>{count}</Paragraph>
      <Paragraph>{getRestOfYear()}</Paragraph>
    </>
  );
};

export default DashBoard;
