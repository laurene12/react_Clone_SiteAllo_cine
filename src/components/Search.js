import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const searchMovies = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_MOVIE", payload: search });
    history.push("/search");
  };

  return (
    <div className=" ml-5">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline my-2 my-sm-0"
          type="submit"
          onClick={searchMovies}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
