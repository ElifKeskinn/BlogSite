import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

export default function PostList({ setPage }) {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [refresh]);

  return (
    <div className="post-list-container">
      <h1>All Posts</h1>
      <div className="posts-grid">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} setPage={setPage} />
      ))}
    </div>
    </div>
  );
}