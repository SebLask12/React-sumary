import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostList.module.css";

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    console.log(postData);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;

  

  return (
    <>
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.author}
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
