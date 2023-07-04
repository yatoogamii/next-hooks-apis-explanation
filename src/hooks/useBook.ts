import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBook = (isEnable: boolean, id?: string) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["getBook"],
    queryFn: () => {
      fetch("api/books/" + id);
    },
    enabled: isEnable,
  });

  // Create
  const {
    mutate: createMutate,
    isLoading: createIsLoading,
    error: createError,
  } = useMutation({
    mutationFn: () => {
      return fetch("api/books", { method: "POST" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBooks"] });
    },
  });

  // Remove
  const {
    mutate: removeMutate,
    isLoading: removeIsLoading,
    error: removeError,
  } = useMutation({
    mutationFn: () => {
      return fetch("api/books/" + id, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBooks"] });
    },
  });

  return {
    book: data,
    isLoading,
    error,
    create: {
      action: createMutate,
      isLoading: createIsLoading,
      error: createError,
    },
    remove: {
      action: removeMutate,
      isLoading: removeIsLoading,
      error: removeError,
    },
  };
};
