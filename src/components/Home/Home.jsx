import React from "react";
import "./home.css";
import BlogPicture from "../img/blog.png";

const Home = ({
  handleSubmit,
  title,
  setTitle,
  author,
  setAuthor,
  date,
  setDate,
  content,
  setContent,
  editId,
}) => {
  return (
    <section id="#" className="home-container">
      <form
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
          setTimeout(() => {
            window.location.href = "#blogs";
          }, 300);
        }}
      >
        <section className="section1">
          <article>
            <div className="inputbox">
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span>Title</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                required
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <span>Author</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <span className="btn-date">Date</span>
              <i></i>
            </div>
          </article>
          <article className="img-box">
            <img src={BlogPicture} alt="blog" />
          </article>
        </section>
        <section>
          <div className="content">
            <span>Content</span>
            <textarea
              name="content"
              cols="5"
              rows="7"
              placeholder="write your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="buttonbox">
            <button type="submit">
              <span className="button_top"> {editId ? "Save" : "Submit"}</span>
            </button>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Home;
