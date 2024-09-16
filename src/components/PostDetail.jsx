import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function PostDetail({ postId }) {
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
      const data = await response.json();
      setData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    getData();
  }, [postId, refresh]);

  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <h2>{data.title}</h2>
          <p>By {data.author} on {new Date(data.createdAt).toLocaleDateString()}</p>
          <p>{data.content}</p>
          
          <CommentList comments={data.comments} setRefresh={setRefresh} refresh={refresh} />
          
          <CommentForm postId={data.id} setRefresh={setRefresh} refresh={refresh} />
        </div>
      )}
    </div>
  );
}