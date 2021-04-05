import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data
    }
  };
};

const UsersPage = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className="list-item">
          <h3>{user.name}</h3>
          <Link href={`/users/${user.id}`}>
            <a className={"link link-small"}>View Details</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
