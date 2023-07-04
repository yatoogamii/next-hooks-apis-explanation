"use client";

import { useBooks } from "@/hooks/useBooks";

export default function Page() {
  const { books, isLoading, error } = useBooks();

  if (isLoading) <p>Loading...</p>;

  if (error) <p>Error...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {books ? (
        <p>Voici les livres : {books}</p>
      ) : (
        <p>Aucun livres trouve...</p>
      )}
    </main>
  );
}
