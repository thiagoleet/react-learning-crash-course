/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const url = "http://localhost:8080/posts";
      const response = await fetch(url);
      const data = await response.json();

      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    const url = "http://localhost:8080/posts";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading posts...</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
