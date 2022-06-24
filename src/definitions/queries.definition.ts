import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";

export const TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTExLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU2MDY4NzcxLCJleHAiOjE2NTY2NzM1NzF9.sUXQrHaa3Za5xQtQ8gyBagCrXvna7hv7XpzqdaHdGv4mIYCy4ilQNwOTkcp6N7zOlh81sw3A199k9naGhnyVOWTLEC_cWor3L-fiaZAdWpsWHfcDQ3GdLBMo4co0PlKLA_NNLqtaMbaYFdl6S_rluoY2L35_Nf-YeKoeBa4qCXttrNMBR_-hLRFiU7cFzvbfs2KL_CyZ9FeaCNTV_0vXNOQ_i-IhtxUwPMbUojoYlE65iNp9QKKrC3L3uInPtOxAQaZC_WxaS32i4ChOAR1fG9OPH5CvxqljtrbEVfQa6b8d4M9rbYh5EAdGrLB5wUjf4pofhLM12IL5Xj8AlfGsWA";

export const client = new ApolloClient({
  uri: 'https://api-dev.foodstyles.com/graphql',
  cache: new InMemoryCache()
});

export const GET_CARDS_QUERY = `
  query {
    cards {
        id
        name       
    }
  }
`;

export const getCards = () => {
  return useQuery(gql(GET_CARDS_QUERY),
    {context: {
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    }},
  );
};

export const ADD_CARD_QUERY = `
  mutation {
    createCard(
      data: {
        name: "One more?",
        minPrice: null,
        maxPrice: null,
        locationTypeIds: [],
        locationCuisineTypeIds: [],
        dishTypeIds: [],
        courseTypeIds: [],
        dietIds: [],
        excludedIngredientIds: []
      }
  ) {
      id
      name       
    }
  }
`;

export const addCard = async() => {
  const res = await client.mutate({
    mutation: (gql(ADD_CARD_QUERY)),
    context: {
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    }
  });
  return res;
};

export const DUPLICATE_CARD_QUERY = (id: number) => `
  mutation {
    duplicateCard(
        id: "${id}",
    ) {
        id
        name           
    }
  }
`;

export const duplicateCard = async(id: number) => {
  const res = await client.mutate({
    mutation: (gql(DUPLICATE_CARD_QUERY(id))),
    context: {
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    }
  });
  return res;
}

export const DELETE_CARD_QUERY = (id: number) => `
  mutation {
    deleteCard(
        id: "${id}",
    )
  }
`;

export const deleteCard = async(id: number) => {
  const res = await client.mutate({
    mutation: (gql(DELETE_CARD_QUERY(id))),
    context: {
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    }
  });
  return res;
}

export const SHARE_CARD_QUERY = (id: number) => `
  mutation {
    shareCard(
        id: "${id}",
    )
  }
`;

export const shareCard = async(id: number) => {
  const res = await client.mutate({
    mutation: (gql(SHARE_CARD_QUERY(id))),
    context: {
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    }
  });
  return res;
}
