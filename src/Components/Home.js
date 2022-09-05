import React, { useState } from "react";
import Footer from "./Footer";
import "./Home.css";
import Nav from "./Nav";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const { dataArr, selectList, setSelectList, setCategory } =
    useContext(CartContext);

  const selectCategory = (event) => {
    if (event.currentTarget.id === "Groceries") {
      setSelectList(
        dataArr.filter((item) => {
          return item.category === event.currentTarget.id;
        })
      );
      setCategory(event.currentTarget.id);
      navigate("/ShowCategory");
    }
    if (event.currentTarget.id === "Work") {
      setSelectList(
        dataArr.filter((item) => {
          return item.category === event.currentTarget.id;
        })
      );
      setCategory(event.currentTarget.id);
      navigate("/ShowCategory");
    }
    if (event.currentTarget.id === "Car") {
      setSelectList(
        dataArr.filter((item) => {
          return item.category === event.currentTarget.id;
        })
      );
      setCategory(event.currentTarget.id);
      navigate("/ShowCategory");
    }
    if (event.currentTarget.id === "Family") {
      setSelectList(
        dataArr.filter((item) => {
          return item.category === event.currentTarget.id;
        })
      );
      setCategory(event.currentTarget.id);
      navigate("/ShowCategory");
    }
    if (event.currentTarget.id === "Home") {
      setSelectList(
        dataArr.filter((item) => {
          return item.category === event.currentTarget.id;
        })
      );
      setCategory(event.currentTarget.id);
      navigate("/ShowCategory");
    }
    if (event.currentTarget.id === "Weekend") {
      setSelectList(
        dataArr.filter((item) => {
          return item.category === event.currentTarget.id;
        })
      );
      setCategory(event.currentTarget.id);
      navigate("/ShowCategory");
    }
  };
  console.log("***********");
  console.log(selectList);
  return (
    <div className="mainHome">
     
      <Nav />
      <div className="home">
        <div className="fontyy">
          <h3>Choose Your Category</h3>
          <p>You want to View...</p>
        </div>

        <div className="homeDiv">
          <div className="left">
            <div id="Groceries" className="size" onClick={selectCategory}>
              Groceries
            </div>
            <div id="Work" className="size" onClick={selectCategory}>
              Work
            </div>
            <div id="Car" className="size" onClick={selectCategory}>
              Car
            </div>
          </div>
          <div className="right">
            <div id="Family" className="size" onClick={selectCategory}>
              Family
            </div>
            <div id="Home" className="size" onClick={selectCategory}>
              Home
            </div>
            <div id="Weekend" className="size" onClick={selectCategory}>
              Weekend
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
