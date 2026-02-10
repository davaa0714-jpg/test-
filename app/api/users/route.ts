async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store", // always fresh data
  });

  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>User List</h1>
      {users.map((u: any) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
