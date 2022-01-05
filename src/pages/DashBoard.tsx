import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "services/pokemon";
import { RootState } from "store";
import { Image, Typography } from "antd";

const DashBoard = () => {
  const { Text } = Typography;
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const count = useSelector((state: RootState) => state.counter.value);
  const { Title, Paragraph } = Typography;

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
              preview={false}
            />
          </>
        )
      )}
      <Paragraph>{count}</Paragraph>
    </>
  );
};

export default DashBoard;
