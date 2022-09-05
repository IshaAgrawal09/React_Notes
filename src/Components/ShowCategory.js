import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "./ShowCategory.css";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ShowCategory = () => {
  let navigate = useNavigate();
  const { selectList, category, setState } = useContext(CartContext);

  const goToNew = () => {
    navigate("/NewNote");
    setState("newNote");
  };
  const back = () => {
    navigate("/");
    setState("home"); 
  };
  return (
    <div className="showMain">
      <Nav />
      <div className="backBtn">
        <button onClick={back} id="back">
          <i className="fa-solid fa-arrow-left"></i>BACK
        </button>
      </div>
      <div className="show">
        <div
          className="showMainCategory"
          id={
            `${category}` === "Weekend"
              ? "weekendCat"
              : `${category}` === "Family"
              ? "familyCat"
              : `${category}` === "Work"
              ? "workCat"
              : `${category}` === "Groceries"
              ? "groceriesCat"
              : `${category}` === "Car"
              ? "carCat"
              : `${category}` === "Home"
              ? "homeCat"
              : null
          }
        >
          {category}
        </div>
        {selectList.length == 0 ? (
          <p id="newAdd">
            Please Write some notes under <span id="singlCat">{category}</span>
            &nbsp;&nbsp;
            <span id="newAddIcon" onClick={goToNew}>
              <i className="fa-solid fa-file-pen"></i>
            </span>
          </p>
        ) : (
          selectList.map((item, index) => {
            return (
              <>
                <div className="singleShow">
                  <div className="firstFlex">
                    <div>
                      <h4>{item.subject}</h4>
                    </div>
                    <div className="date">{item.date}</div>
                  </div>
                  <div>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <p className="date">{item.content}</p>
                  </div>
                </div>
                <hr />
              </>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ShowCategory;
