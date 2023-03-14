import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <div>
      <NavBar />
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`./users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );

  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
