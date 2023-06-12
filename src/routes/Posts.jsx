import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export async function loader() {
  const url = "http://localhost:8080/posts";
  const response = await fetch(url);
  const data = await response.json();

  return data.posts;
}

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
