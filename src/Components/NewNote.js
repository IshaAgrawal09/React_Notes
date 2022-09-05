import React, { useState } from "react";
import "./NewNote.css";
import Nav from "./Nav";
import Footer from "./Footer";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const NewNote = () => {
  let navigate = useNavigate();
  const {
    setState,
    date,
    dataArr,
    setDataArr,
    count,
    setCount,
    subject,
    setSubject,
    categoryAdd,
    setCategoryAdd,
    description,
    setDescription,
    content,
    setContent,
    editData,
    setEditData,
    editDataId,
    setNewId,
  } = useContext(CartContext);

  const [error, setError] = useState("");

  // SAVE NOTE BUTTON FUNCTIONALITY
  const SaveNote = () => {
    if (
      subject === "" ||
      categoryAdd === "null" ||
      description === "" ||
      content === ""
    ) {
      setError("Please fill every Field!");
    } else {
      if (editData) {
        setDataArr(
          dataArr.filter((item) => {
            if (editDataId == item.id) {
              item.subject = subject;
              item.date = date;
              item.category = categoryAdd;
              item.description = description;
              item.content = content;
              setNewId(item.id);
            }
            return item;
          })
        );
        setEditData(false);
      } else {
        setDataArr([
          {
            id: count,
            subject: subject,
            date: date,
            category: categoryAdd,
            description: description,
            content: content,
          },
          ...dataArr,
        ]);
        setNewId(count);
        setCount(count + 1);
      }
      setError("");
      setSubject("");
      setContent("");
      setDescription("");
      setCategoryAdd("null");
      setState("category");
      navigate("/AllList");
    }
  };
  console.log(dataArr);
  return (
    <div className="newMain">
      <Nav />
      <div className="newNote">
        <div className="singleNote">
          <div className="noteData">
            <p>Subject:</p>
          </div>
          <div className="noteInput">
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
        </div>

        <div className="singleNote">
          <div className="noteData">
            <p>Date:</p>
          </div>
          <div className="noteInput">
            <p id="gray">{date}</p>
          </div>
        </div>

        <div className="singleNote">
          <div className="noteData">
            <p>Category:</p>
          </div>
          <div className="noteInput">
            <select
              name="category"
              id="categories"
              value={categoryAdd}
              onChange={(event) => setCategoryAdd(event.target.value)}
            >
              <option value="null">Choose Category</option>
              <option value="Groceries">Grocery</option>
              <option value="Work">Work</option>
              <option value="Car">Car</option>
              <option value="Family">Family</option>
              <option value="Home">Home</option>
              <option value="Weekend">Weekend</option>
            </select>
          </div>
        </div>

        <div className="singleNote">
          <div className="noteData">
            <p>Description:</p>
          </div>
          <div className="noteInput">
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <div className="singleNote">
          <textarea
            rows={7}
            cols={90}
            placeholder="add More details"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <div className="singleNote">
          <p>{error}</p>
          <button onClick={SaveNote}>SAVE NOTE</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewNote;
