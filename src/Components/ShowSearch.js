import React, { useState } from "react";
import "./ShowSearch.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./Context";
import { Modal } from "@mui/material";

const ShowSearch = () => {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [removeIndex, setRemoveIndex] = useState();
  const {
    setSearchList,
    searchList,
    setInputs,
    setState,
    dataArr,
    setSubject,
    setCategoryAdd,
    setDescription,
    setContent,
    setEditDataId,
    setEditData,
    setDataArr,
    removeId,
    setRemoveId,
  } = useContext(CartContext);
  // BACK BUTTON
  const back = () => {
    navigate("/");
    setState("home");
    setInputs("");
  };

  // EDIT FUNCTIONALITY
  const editNotesFunc = (event) => {
    console.log(event.currentTarget.id);
    dataArr.filter((item, index) => {
      if (item.id == event.currentTarget.id) {
        setSubject(item.subject);
        setCategoryAdd(item.category);
        setDescription(item.description);
        setContent(item.content);
      }
    });
    setEditDataId(event.currentTarget.id);
    setEditData(true);
    setState("newNote");
    navigate("/newNote");
  };

  // DELETE FUNCTIONALITY
  const deleteNote = (event) => {
    setOpen(true);
    searchList.filter((item, index) => {
      if (event.currentTarget.id == index) {
        setRemoveId(item.id);
      }
    });
    setRemoveIndex(event.currentTarget.id);
  };
  // REMOVE MODAL FUNCTION
  const removeNote = () => {
    setOpen(false);
    setSearchList(
      searchList.filter((item, index) => {
        if (index == removeIndex) {
          return index != removeIndex;
        }
        return item;
      })
    );
    setDataArr(
      dataArr.filter((item, index) => {
        if (item.id == removeId) {
          return false;
        }
        return item;
      })
    );
    
  };
  return (
    <div className="showSearchMain">
      <Nav />
      <div className="backBtn">
        <button onClick={back} id="back">
          <i className="fa-solid fa-arrow-left"></i>BACK
        </button>
      </div>
      {searchList.length === 0 ? (
        <h4 id="sorry">Sorry, No Matches found!</h4>
      ) : (
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
                    <div>
                      <i
                        className="fa-solid fa-pencil edit"
                        id={item.id}
                        onClick={editNotesFunc}
                      ></i>
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-trash-can trash"
                        id={index}
                        onClick={deleteNote}
                      ></i>
                    </div>
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
      )}
      <Footer />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal">
          <p>Are You Sure, You want to delete the note ?</p>
          <button onClick={removeNote}>REMOVE</button>
        </div>
      </Modal>
    </div>
  );
};

export default ShowSearch;
