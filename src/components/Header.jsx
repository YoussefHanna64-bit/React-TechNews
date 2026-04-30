import "../styles/Header.css";

function Header() {
  return (
    <>
      <nav>
        <p className="Logo">
          <span className="Tech">Tech</span>
          News
        </p>

        <div className="left">
          <a href="#">Home</a>
          <a href="#">My Posts</a>
        </div>
      </nav>
    </>
  );
}
export default Header;
