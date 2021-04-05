import styles from "../../styles/PostsPage.module.css";
import Link from "next/link";
import { PostsContext, SET_POSTS } from "../../contexts/PostsContext";
import { useEffect, useContext } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  };
};

const PostsPage = ({ posts }) => {
  const [state, dispatch] = useContext(PostsContext);
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: SET_POSTS,
        payload: posts
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Link href="/posts/new">
        <a className="button">New Post</a>
      </Link>
      {state?.posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {!post.custom && (
            <Link href={`/posts/${post.id}`}>
              <a className={"link link-small"}>View full</a>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
