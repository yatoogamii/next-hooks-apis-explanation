async function getData() {
  const res = await fetch("http://localhost:3000/api/users");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const users = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {JSON.stringify(users)}
    </main>
  );
}
