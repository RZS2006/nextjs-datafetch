import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const userData = await userRes.json();

  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  const postsData = await postsRes.json();

  return {
    props: {
      user: userData,
      posts: postsData
    }
  };
};

const SinglePostPage = ({ user, posts }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>@{user.username}</p>
      <strong>Contact</strong>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone.split(" ")[0]}</p>
      <p>
        Website: <a class="link link-regular">{user.website}</a>
      </p>

      <h2>Posts</h2>

      {posts.map((post) => (
        <div className="list-item">
          <h3>{post.title}</h3>
          <Link href={`/posts/${post.id}`}>
            <a className={"link link-small"}>View Full</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SinglePostPage;
