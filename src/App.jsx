import './App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HomePage from "./components/HomePage";

export default function App() {
  const [page, setPage] = useState(<HomePage />);


  const showPostList = () => setPage(<PostList setPage={setPage} />);
  const showPostForm = () => setPage(<PostForm setPage={setPage} />);
  const showHomePage = () => setPage(<HomePage />);

  return (
    <div>
      <header>
        <button onClick = {showHomePage}> 🏚️ </button>
        <button onClick={showPostList}>Post List</button>
        <button onClick={showPostForm}>New Post</button>
      </header>
      <main>
        {page}
    </main>
    </div>
  );
}