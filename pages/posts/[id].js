import Link from "next/link";
import styles from "../../styles/SinglePostPage.module.css";
import {
  PostsContext,
  SET_POST,
  DELETE_POST
} from "../../contexts/PostsContext";
import { useContext, useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postData = await postRes.json();

  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postData.userId}`
  );
  const userData = await userRes.json();

  return {
    props: {
      post: postData,
      user: userData
    }
  };
};

const SinglePostPage = ({ post, user }) => {
  const [state, dispatch] = useContext(PostsContext);
  useEffect(() => {
    dispatch({
      type: SET_POST,
      payload: post
    });
  }, []);

  const _post = state.posts.find((post_b) => post_b.id === post.id);

  const onUpdate = (id) => {
    let newPostStarred;

    if (_post.starred) {
      newPostStarred = !_post.starred;
    } else {
      newPostStarred = true;
    }

    const newPost = {
      ..._post,
      starred: newPostStarred
    };

    dispatch({
      type: SET_POST,
      payload: newPost
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: DELETE_POST,
      payload: {
        id: id
      }
    });
  };

  return (
    <div>
      <small>
        Written by{" "}
        <Link href={`/users/${user.id}`}>
          <a className="link link-regular">{user.name}</a>
        </Link>
      </small>
      <div>
        <button
          className={`button ${!_post?.starred ? "" : styles.secondaryButton}`}
          onClick={() => onUpdate(_post?.id)}
        >
          {!_post?.starred ? "Star" : "Unstar"}
        </button>
        <button
          className={`button ${styles.deleteButton}`}
          onClick={() => onDelete(_post?.id)}
        >
          Delete
        </button>
      </div>
      <h1>{_post?.title}</h1>
      <p>{_post?.body}</p>
    </div>
  );
};

export default SinglePostPage;
