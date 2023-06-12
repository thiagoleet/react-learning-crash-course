import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHanlder(value) {
    setEnteredBody(value);
  }

  function authorChangeHanlder(value) {
    setEnteredAuthor(value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHanlder}
        onAuthorChange={authorChangeHanlder}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Fernando" body="Checkout the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
