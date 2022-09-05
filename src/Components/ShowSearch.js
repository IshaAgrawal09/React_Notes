import React from "react";
import "./ShowSearch.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./Context";

const ShowSearch = () => {
  let navigate = useNavigate();
  const { searchList, setInputs, setState } = useContext(CartContext);
  const back = () => {
    navigate("/");
    setState("home");
    setInputs("");  
  };
  return (
    <div className="showSearchMain">
      <Nav />
      <div className="backBtn">
        <button onClick={back} id="back">
          <i className="fa-solid fa-arrow-left"></i>BACK
        </button>
      </div>
      <div className="showSearch">
        {searchList.map((item, index) => {
          return (
            <div
              className="singleList"
              id={
                `${item.category}` === "Weekend"
                  ? "weekend"
                  : `${item.category}` === "Family"
                  ? "family"
                  : `${item.category}` === "Work"
                  ? "work"
                  : `${item.category}` === "Groceries"
                  ? "groceries"
                  : `${item.category}` === "Car"
                  ? "car"
                  : `${item.category}` === "Home"
                  ? "home"
                  : null
              }
            >
              <div className="firstFlex">
                <div>
                  <h4>
                    {item.subject}&nbsp;({item.category})
                  </h4>
                </div>
                <div className="firstIcon">
                  {/* <div>
                    <i
                      className="fa-solid fa-pencil edit"
                      id={item.id}
                      // onClick={editNotesFunc}
                    ></i>
                  </div> */}
                  {/* <div>
                    <i
                      className="fa-solid fa-trash-can trash"
                      id={index}
                      // onClick={deleteNote}
                    ></i>
                  </div> */}
                </div>
              </div>
              <div className="firstFlex">
                <div>
                  <p>{item.description}</p>
                </div>
                <div className="date">{item.date}</div>
              </div>
              <div>
                <p className="date">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ShowSearch;
