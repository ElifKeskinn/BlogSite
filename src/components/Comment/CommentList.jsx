export default function CommentList({ comments, setRefresh, refresh }) {
  const handleLikeBtn = async (e) => {
    e.preventDefault();
    const commentId = e.target.value;
    const response = await fetch(`http://localhost:3000/api/comments/${commentId}?like=true`);
    if (!response.ok) {
      return;
    }
    setRefresh(!refresh);
  };

  const handleDislikeBtn = async (e) => {
    e.preventDefault();
    const commentId = e.target.value;
    const response = await fetch(`http://localhost:3000/api/comments/${commentId}?dislike=true`);
    if (!response.ok) {
      return;
    }
    setRefresh(!refresh);
  };

  return (
    <div className="comment-list-container">
      {comments?.reverse().map((comment, i) => (
        <div key={i} className="comment-item">
          <span>{comment.content}</span>
          <button onClick={handleLikeBtn} value={comment.id}>Like {comment.likes}</button>
          <button onClick={handleDislikeBtn} value={comment.id}>Dislike {comment.dislikes}</button>
        </div>
      ))}
    </div>

  );
}