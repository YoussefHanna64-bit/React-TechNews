import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark px-4 mb-4">
        <div className="container-fluid">
          <p className="navbar-brand mb-0 fw-bold">
            <span className="Tech">Tech</span>
            News
          </p>
          <div className="navbar-nav ms-auto">
            <a className="nav-link active fw-semibold" href="#">
              Home
            </a>
            <a className="nav-link fw-semibold" href="#">
              My Posts
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
