import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, onRemove }) => {
  return (
    <div className="blog-list">
      <h2 className="blog-list-heading">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <div className="blog-item-heading">
              <h3 className="blog-title">{blog.title}</h3>
              <div>
                {/* <button className="btn">View</button> */}

                <button
                  className="btn btn-subscribe"
                  onClick={() => onRemove(blog.id)}
                >
                  Remove
                </button>
              </div>
            </div>

            {/* <p className="blog-body">{blog.body}</p> */}
            <p className="blog-author">Writtend by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
