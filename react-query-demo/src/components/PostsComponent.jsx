import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default function PostsComponent() {
  const { data, isLoading, isError, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}><b>{post.title}</b></li>
        ))}
      </ul>
    </div>
  );
}
