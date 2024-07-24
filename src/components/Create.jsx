import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Dave");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);
    const newBlog = { title, body, author };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("New BLOG Added!");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create-blog">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Blog Body:</label>
          <textarea
            name=""
            id=""
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="">Blog Author:</label>
          <select
            name=""
            id=""
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Dave">Dave</option>
            <option value="Marc">Marc</option>
          </select>
        </div>

        <div className="d-flex">
          {!isPending && (
            <button type="submit" className="btn btn-add">
              Add
            </button>
          )}
          {isPending && (
            <button type="submit" className="btn btn-add">
              Adding Blog...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
