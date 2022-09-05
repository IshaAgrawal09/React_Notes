import React from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  const { state, setState, setInputs } = useContext(CartContext);

  const newNote = () => {
    setState("newNote");
    navigate("/newNote");
  };
  const homePage = () => {
    setState("home");
    navigate("/");
    setInputs("");
  };
  const allList = () => {
    setState("category");
    navigate("/allList");
    setInputs("");
  };
  return (
    <div className="footer">
      <div
        className="icon"
        id={`${state}` === "home" ? "active" : null}
        onClick={homePage}
      >
        <i className="fa-solid fa-house"></i>
        <p>HOME</p>
      </div>

      <div
        className="icon"
        onClick={newNote}
        id={`${state}` === "newNote" ? "active" : null}
      >
        <i className="fa-solid fa-file-pen"></i>
        <p>NEW NOTE</p>
      </div>

      <div
        className="icon"
        id={`${state}` === "category" ? "active" : null}
        onClick={allList}
      >
        <i className="fa-solid fa-bars"></i>
        <p>YOUR NOTES</p>
      </div>
    </div>
  );
};

export default Footer;
