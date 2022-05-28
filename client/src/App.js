import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
//import Martie from "./assets/imagens/602e70b4ce34f.png";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { AuthContext } from "./helpers/AuthContext";
import { useState } from "react";

function App() {

  const [authState, setAuthState] = useState(false)

  return (
    <div>
      <AuthContext.Provider value={{authState, setAuthState}}>
        <BrowserRouter>
          <div className="navbar">
            <Link to="/"> Home </Link>
            <Link to="/createpost"> Criar Post </Link>

            {/* Manter cache de de login na memória */}
            {!localStorage.getItem("accessToken") && (
              // {!sessionStorage.getItem("accessToken") && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/registration">Cadastrar Usuario</Link>
              </>
            )}
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
