import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Movies</h1>
        <form id="form">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="search"
          />
        </form>
      </header>

      <main id="main"></main>
    </React.Fragment>
  );
};

export default Header;
