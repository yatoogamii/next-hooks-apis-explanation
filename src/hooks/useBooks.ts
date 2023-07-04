import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getBooks"],
    queryFn: () => {
      fetch("api/books");
    },
  });

  return {
    books: data,
    isLoading,
    error,
  };
};
