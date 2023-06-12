import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
      <Post author="Thiago" body="React.js is awesome!" />
      <Post author="Fernando" body="Checkout the full course!" />
    </ul>
  );
}

export default PostsList;
