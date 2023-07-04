import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      Main Page
      <Link href={"/books"}>
        <button className="bg-red-500 mt-5">Go to Books</button>
      </Link>
    </main>
  );
}
