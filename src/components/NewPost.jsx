/* eslint-disable react/prop-types */
import classes from "./NewPost.module.css";

function NewPost(props) {
  function changeBodyHandler(event) {
    props.onBodyChange(event.target.value);
  }

  function changeAuthorHandler(event) {
    props.onAuthorChange(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
    </form>
  );
}

export default NewPost;
