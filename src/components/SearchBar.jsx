import { memo } from "react";

const SearchBar = ({ setSearchTitle }) => {
  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="input-group shadow-sm">
        <span className="input-group-text bg-white border-end-0 text-muted">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0 ps-0"
          placeholder="Search"
          onChange={handleChange}
          style={{ boxShadow: "none", borderColor: "rgb(222, 226, 230)", outline: "none" }}
        />
      </div>
    </div>
  );
};

export default memo(SearchBar);
