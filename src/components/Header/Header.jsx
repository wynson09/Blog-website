import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <a href="/#">Home</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
