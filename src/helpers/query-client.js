import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5000, networkMode: "always" },
    mutations: { networkMode: "always" },
  },
});

export default queryClient;
