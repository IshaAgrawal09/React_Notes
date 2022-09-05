import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import "./Nav.css";

const Nav = () => {
  const { inputs, setInputs,search } = useContext(CartContext);
  return (
    <div className="nav">
      <div className="header">
        <h3>
          <span id="mainN">N</span>
          <span>OTR</span>
        </h3>
      </div>
      <div className="SearchBar">
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Search"
            value={inputs}
            onChange={(event) => setInputs(event.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>
    </div>
  );
};

export default Nav;
