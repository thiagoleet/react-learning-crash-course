/* eslint-disable react/prop-types */
import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHanlder(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHanlder(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    console.log(postData);

    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHanlder} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHanlder} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
