import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        {posts.length === 0 && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2> There are no posts yet</h2>
            <p>Start adding Some!</p>
          </div>
        )}
      </ul>
    </>
  );
}

export default PostsList;
