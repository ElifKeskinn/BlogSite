import { useState, useRef } from "react";

export default function PostForm({ setRefresh, refresh }) {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const formRef = useRef(null);

  const handleNewPost = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    if (response.ok) {
      setRefresh(!refresh);
      formRef.current.reset();
    }
  };

  return (
    <div className="post-form-container">
      <h2>Share your own thoughts</h2>
      <form ref={formRef} onSubmit={handleNewPost} className="post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Post Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}