import BlogList from "./BlogList";
import useFetchData from "../useFetchData";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetchData("http://localhost:3000/blogs");

  const onRemoveBlog = (id) => {
    // blogs = blogs.filter((blog) => blog.id !== id);
    console.log("Ready to delete blog with id:", id);
  };

  return (
    <div className="home">
      <div className="home-header">
        <h3>Home</h3>
      </div>

      {isPending && <div className="loading-message">Loading...</div>}

      {error && <div className="loading-message">{error}</div>}

      {/* Render blogs when done fetching  */}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" onRemove={onRemoveBlog} />
      )}
    </div>
  );
};

export default Home;
