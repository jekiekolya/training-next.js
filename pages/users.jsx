import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

const usersApi = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Ko" },
  { id: 3, name: "Jek" },
];

export default function Users() {
  const [users, setUsers] = useState(usersApi);

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
