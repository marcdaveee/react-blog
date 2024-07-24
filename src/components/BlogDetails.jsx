import { useParams } from "react-router-dom";
import useFetchData from "../useFetchData";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetchData("http://localhost:3000/blogs/" + id);

  return (
    <div>
      {isPending && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {blog && (
        <div className="blog-item">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-body">{blog.body}</p>
          <p className="blog-author">Writtend by {blog.author}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
