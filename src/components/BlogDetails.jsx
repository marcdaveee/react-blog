import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return <div>BlogDetails Id: {id}</div>;
};

export default BlogDetails;
