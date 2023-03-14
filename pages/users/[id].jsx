export default function User({ user }) {
  return (
    <div>
      <h1>User ID: {user.id}</h1>
      <p>User name: {user.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.query.id}`
  );

  const user = await res.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
