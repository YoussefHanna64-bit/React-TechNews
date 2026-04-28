function Header() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark shadow-sm mb-4">
        <div className="container">
          <p className="navbar-brand mb-0 fw-bold">
            <span style={{ color: "orange" }}>Tech</span>
            News
          </p>

          <div className="navbar-nav ms-auto">
            <a className="nav-link active fw-semibold" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              My Posts
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
