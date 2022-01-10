import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "core";
// TODO: graphql extends
// import { request, gql, ClientError } from "graphql-request";

// TODO: graphql extends
// const graphqlBaseQuery =
//   ({ baseUrl }: { baseUrl: string }) =>
//   async ({ body }: { body: string }) => {
//     try {
//       const result = await request(baseUrl, body);
//       return { data: result };
//     } catch (error) {
//       if (error instanceof ClientError) {
//         return { error: { status: error.response.status, data: error } };
//       }
//       return { error: { status: 500, data: error } };
//     }
//   };

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
  // TODO: graphql extends
  // baseQuery: graphqlBaseQuery({
  //   baseUrl: "https://graphql-pokeapi.vercel.app/api/graphql",
  // }),
  // endpoints: (builder) => ({
  //   getPokemonByName: builder.query<Pokemon, string>({
  //     query: (name) => ({
  //       body: gql`
  //       query {
  //         pokemon(name: "${name}") {
  //           id
  //           name
  //           base_experience
  //           height
  //           weight
  //           species {
  //             name
  //           }
  //           sprites {
  //             front_shiny
  //           }
  //         }
  //       }
  //       `,
  //     }),
  //     transformResponse: (response) => response.pokemon,
  //   }),
  // }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
