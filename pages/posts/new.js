import { v4 as uuidv4 } from "uuid";
import router from "next/router";
import { useState, useContext } from "react";
import { PostsContext, ADD_POST } from "../../contexts/PostsContext";
import styles from "../../styles/NewPostPage.module.css";

const NewPostPage = () => {
  const [, dispatch] = useContext(PostsContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST,
      payload: {
        id: uuidv4(),
        title: title,
        body: body,
        custom: true
      }
    });
    router.push("/posts");
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
        <label htmlFor="title" className={styles.label}>
          Title
        </label>
        <input
          className={styles.input}
          type="text"
          required
          autoComplete="off"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body" className={styles.label}>
          Body
        </label>
        <textarea
          className={`${styles.input} ${styles.textbox}`}
          required
          autoComplete="off"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit" className={`button ${styles.button}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPostPage;
