import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import allData from "./Data";
const CartContext = createContext();

export function CartProvider({ children }) {
  let navigate = useNavigate();
  const [state, setState] = useState("home");
  const [date, setDate] = useState();

  useEffect(() => {
    var today = new Date();
    setDate(
      today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()
    );
  });

  const [dataArr, setDataArr] = useState(allData["data"]);
  const [count, setCount] = useState(5);
  const [selectList, setSelectList] = useState(dataArr);
  const [category, setCategory] = useState();
  const [editData, setEditData] = useState(false);
  const [editDataId, setEditDataId] = useState();
  const [inputs, setInputs] = useState("");
  const [searchList, setSearchList] = useState(dataArr);
  // NEWNOTE DATA
  const [subject, setSubject] = useState("");
  const [categoryAdd, setCategoryAdd] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const [newId, setNewId] = useState();

  const search = (event) => {
    event.preventDefault();
    navigate("/ShowSearch");
    if (inputs === "") {
      setSearchList(dataArr);
    } else {
      // setIsSubmit(true);
      setSearchList(
        dataArr.filter((item) => {
          return (
            item.category.toLowerCase().includes(inputs) ||
            item.subject.toLowerCase().includes(inputs)
          );
        })
      );
    }

    setState("category");
  };

  return (
    <CartContext.Provider
      value={{
        state,
        setState,
        date,
        setDate,
        dataArr,
        setDataArr,
        selectList,
        setSelectList,
        category,
        setCategory,
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
        setEditDataId,
        inputs,
        setInputs,
        search,
        searchList,
        setSearchList,
        newId,
        setNewId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
