import { getGraphqlClient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => getGraphqlClient().request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};

// import { graphqlClient } from "@/clients/api";
// import { getCurrentUserQuery } from "@/graphql/query/user";
// import { useQuery } from "@tanstack/react-query";

// export const useCurrentUser = () => {
//   const query = useQuery({
//     queryKey: ["current-user"],
//     queryFn: () => graphqlClient.request(getCurrentUserQuery),
//   });

//   return { ...query, user: query.data?.getCurrentUser };
// };
