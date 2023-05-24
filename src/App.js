import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import { useState, useCallback, useMemo } from "react";
import BlogPost from "./components/data/dbBlog.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [blogPost, setBlogPost] = useState(BlogPost);
  const [editId, setEditId] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== "") {
      for (let i = 0; i < blogPost.length; i++) {
        if (blogPost[i].id === editId) {
          blogPost[i].Title = title;
          blogPost[i].Author = author;
          blogPost[i].Date = date;
          blogPost[i].Content = content;
        }
      }
      resetInputFields();
      setBlogPost(blogPost);
      setEditId("");
      return;
    }
    if (editId === "") {
      blogPost.reverse();
      const newBlogPost = {
        id: uuidv4(),
        Title: title,
        Author: author,
        Date: date,
        Content: content,
      };
      const newList = [...blogPost, newBlogPost];
      newList.reverse();
      setBlogPost(newList);
    }
    setEditId("");
    resetInputFields();
  };

  const resetInputFields = () => {
    setTitle("");
    setAuthor("");
    setDate("");
    setContent("");
  };

  /*=================== Change as useCallback ====================*/
  const handleDelete = useCallback(
    (id) => {
      const blogList = blogPost.filter((item) => item.id !== id);
      setBlogPost(blogList);
    },
    [blogPost]
  );

  /* const handleDelete = (id) => {
    const blogList = blogPost.filter((item) => item.id !== id);
    setBlogPost(blogList);
  }; */

  const handleEdit = (id, Title, Author, Date, Content) => {
    setEditId(id);
    setTitle(Title);
    setAuthor(Author);
    setDate(Date);
    setContent(Content);
  };

  /* ==================== by using useMemo ================ */
  const handleFilter = useMemo(() => {
    return blogPost.filter((data) => data?.Date?.includes(filter));
  }, [blogPost, filter]);

  return (
    <div>
      <Header />
      <Home
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        date={date}
        setDate={setDate}
        content={content}
        setContent={setContent}
        editId={editId}
      />
      <Blog
        blogPost={handleFilter}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        filter={filter}
        setFilter={setFilter}
      />
      <Contact />
    </div>
  );
}

export default App;
