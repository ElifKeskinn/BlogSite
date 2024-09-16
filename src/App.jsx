import './App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {
  const [page, setPage] = useState('home');

  const showPostList = () => setPage(<PostList setPage={setPage} />);
  const showPostForm = () => setPage(<PostForm setPage={setPage} />);

  return (
    <div>
      <header>
        <button onClick={showPostList}>Post List</button>
        <button onClick={showPostForm}>New Post</button>
      </header>
      <main>
        {page}
      </main>
    </div>
  );
}