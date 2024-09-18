import { useRef } from "react";

export default function CommentForm({ postId, setRefresh, refresh }) {
  const formRef = useRef(null);

  const handleAddNewCommentForm = async (e) => {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target));

    const newComment = {
      ...formObj,
      postId: postId,
    };

    try {
      const response = await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (response.ok) {
        setRefresh(!refresh);
        formRef.current.reset();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleAddNewCommentForm}>
      <textarea name="content" placeholder="Add a comment"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}