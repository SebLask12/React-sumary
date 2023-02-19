import { Outlet } from "react-router-dom";
import PostsList from "../components/PostList";

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

export async function loader() {
  const res = await fetch("http://localhost:8080/posts");
  const redData = await res.json();
  return redData.posts;
}
