import { useQuery } from "react-query";

export default function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery("posts", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

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
