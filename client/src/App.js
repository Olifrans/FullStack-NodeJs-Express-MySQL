import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Martie from "./assets/imagens/602e70b4ce34f.png";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <Link to="/"> Home </Link>
          <Link to="/createpost"> Criar Post </Link>
        </div>

        <h1>Full Stack Web Development - ReactJS, NodeJS e MySQL! </h1>
        <img
          style={{ position: "initial" }}
          src={Martie}
          alt="Martie-Management"
          className="logo"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
