import React from "react";
import "./popup.css";

function Popup({
  isClick,
  setIsClick,
  handleClick,
  blogTitle,
  blogAuthor,
  blogDate,
  blogContent,
}) {
  return (
    <section className={isClick ? "popUp-container" : "popUp-container-hide"}>
      <div className="blurr"></div>
      <article className="popUp-card">
        <span className="close-btn" onClick={() => setIsClick(false)}>
          X
        </span>
        <h2>{blogTitle}</h2>
        <h4>
          By <span>{blogAuthor}</span> on {blogDate}
        </h4>
        <p>
          <span className="space"></span>
          {blogContent}
        </p>
      </article>
    </section>
  );
}

export default Popup;
