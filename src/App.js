import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context";
import Home from "./Components/Home";
import NewNote from "./Components/NewNote";
import AllList from "./Components/AllList";
import ShowCategory from "./Components/ShowCategory";
import ShowSearch from "./Components/ShowSearch";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newNote" element={<NewNote />}/>
          <Route path="/allList" element={<AllList />}/>
          <Route path="/ShowCategory" element={<ShowCategory />}/>
          <Route path="/showSearch" element={<ShowSearch />}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
