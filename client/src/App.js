import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
//import Martie from "./assets/imagens/602e70b4ce34f.png";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <Link to="/"> Home </Link>
          <Link to="/createpost"> Criar Post </Link>

          <Link to="/login">Login</Link>
          <Link to="/registration">Cadastrar Usuario</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />

          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
