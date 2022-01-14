import "./App.css";
import "./styles/globals.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";
import CategoryPost from "./components/CategoryPost";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/category/:id" element={<CategoryPost />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
