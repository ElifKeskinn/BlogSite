import PostDetail from "./PostDetail";

export default function PostItem({ post, setPage }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
      <button onClick={() => setPage(<PostDetail postId={post.id} setPage={setPage} />)}>
        Read More
      </button>
    </div>
  );
}