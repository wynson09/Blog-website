import { useState } from "react";
import "./blog.css";
import FilterByDate from "../FilterByDate/FilterByDate";
import Popup from "../Popup/Popup";

function Blog({ blogPost, handleDelete, handleEdit, filter, setFilter }) {
  const [isClick, setIsClick] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogDate, setBlogDate] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const handleClick = (title, author, date, content) => {
    setBlogTitle(title);
    setBlogAuthor(author);
    setBlogDate(date);
    setBlogContent(content);
    setIsClick(true);
  };

  return (
    <section id="blogs" className="blog-container">
      <h1>Blogs</h1>
      <h4>All blog post</h4>
      <FilterByDate filter={filter} setFilter={setFilter} />
      <article className="blog-box">
        <Popup
          isClick={isClick}
          setIsClick={setIsClick}
          handleClick={handleClick}
          blogTitle={blogTitle}
          blogAuthor={blogAuthor}
          blogDate={blogDate}
          blogContent={blogContent}
        />
        {blogPost.length !== 0 ? (
          <div className="card-container">
            {blogPost.map((blog) => {
              const newDate = new Date(blog?.Date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const contentSlice = blog?.Content.slice(0, 228);
              return (
                <div key={blog?.id} className="blogCard">
                  <div
                    className="popUp"
                    onClick={() => {
                      handleClick(
                        blog.Title,
                        blog.Author,
                        blog.Date,
                        blog.Content
                      );
                      window.location.href = "#blogs";
                    }}
                  ></div>
                  <h2 className="blog-title">{blog?.Title}</h2>
                  <p className="blog-author">
                    By <span>{blog?.Author}</span> on {newDate}
                  </p>
                  <p className="blog-content">{contentSlice}</p>
                  <div className="buttonbox btn">
                    <button type="button">
                      <span
                        className="button_top"
                        onClick={() => {
                          handleEdit(
                            blog?.id,
                            blog?.Title,
                            blog?.Author,
                            blog?.Date,
                            blog?.Content
                          );
                          setTimeout(() => {
                            window.location.href = "#";
                          }, 300);
                        }}
                      >
                        Edit
                      </span>
                    </button>
                    <button type="delete">
                      <span
                        className="button_top"
                        onClick={() => {
                          handleDelete(blog?.id);
                        }}
                      >
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="card-container empty-container">
            <h3>No blog posts to display</h3>
          </div>
        )}
      </article>
    </section>
  );
}

export default Blog;
