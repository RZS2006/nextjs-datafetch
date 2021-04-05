import React, { createContext, useReducer } from "react";

export const PostsContext = createContext();

export const SET_POSTS = "APP/POSTS/SET_POSTS";
export const SET_POST = "APP/POSTS/SET/POST";
export const ADD_POST = "APP/POSTS/ADD_POST";
export const DELETE_POST = "APP/POSTS/DELETE_POST";

const initialState = { posts: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      console.log(action);

      return {
        ...state,
        posts: action.payload
      };

    case SET_POST:
      console.log(action);

      let newPostsSetPost;

      if (
        state.posts.every((post) => {
          return post.id !== action.payload.id;
        })
      ) {
        newPostsSetPost = [action.payload, ...state.posts];
      } else {
        newPostsSetPost = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        });
      }

      return {
        ...state,
        posts: newPostsSetPost
      };

    case ADD_POST:
      console.log(action);

      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };

    case DELETE_POST:
      console.log(action);

      const newPostsDeletePost = state.posts.filter(
        (post) => post.id !== action.payload.id
      );

      return {
        ...state,
        posts: newPostsDeletePost
      };
    default:
      return {
        ...state
      };
  }
};

const PostsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.posts);

  return (
    <PostsContext.Provider value={[state, dispatch]}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
