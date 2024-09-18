import './App.css';
import { useState } from "react";
import PostList from "./components/Post/PostList";
import PostForm from "./components/Post/PostForm";
import HomePage from "./components/HomePage/HomePage";
import { FaHome } from 'react-icons/fa';

export default function App() {
  const [page, setPage] = useState(<HomePage />);


  const showPostList = () => setPage(<PostList setPage={setPage} />);
  const showPostForm = () => setPage(<PostForm setPage={setPage} />);
  const showHomePage = () => setPage(<HomePage />);

  return (
    <div>
      <header>
        <button onClick={showHomePage} className="home-button">
        <FaHome /> Home        </button>
        <button onClick={showPostList}>Post List</button>
        <button onClick={showPostForm}>New Post</button>
      </header>
      <main>
        {page}
      </main>
    </div>
  );
}