import React, { useState, useEffect } from "react";
import "./AllList.css";
import { Modal } from "@mui/material";
import Nav from "./Nav";
import Footer from "./Footer";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AllList = () => {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [removeIndex, setRemoveIndex] = useState();
  const {
    dataArr,
    setDataArr,
    setSubject,
    setCategoryAdd,
    setDescription,
    setContent,
    setState,
    setEditDataId,
    setEditData,
  } = useContext(CartContext);

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
    setRemoveIndex(event.currentTarget.id);
  };

  // REMOVE MODAL FUNCTION
  const removeNote = () => {
    setOpen(false);
    setDataArr(
      dataArr.filter((item, index) => {
        if (index == removeIndex) {
          return index != removeIndex;
        }
        return item;
      })
    );
  };

  return (
    <div className="listMain">
      <Nav />
      <div className="list">
        {dataArr.map((item, index) => {
          return (
            <>
              <div
                className="singleList "
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
            </>
          );
        })}
      </div>

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

export default AllList;
