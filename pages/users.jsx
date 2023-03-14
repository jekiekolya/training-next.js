import Link from "next/link";
import Container from "../components/Container/Container";

export default function Users({ users }) {
  return (
    <Container title="Users page" keywordsProps="user">
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`./users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
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
