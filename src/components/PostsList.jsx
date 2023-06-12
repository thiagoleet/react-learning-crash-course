/* eslint-disable react/prop-types */
import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList(props) {
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
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHanlder}
            onAuthorChange={authorChangeHanlder}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Fernando" body="Checkout the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
