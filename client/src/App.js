import "./App.css";
// import Home from "./pages/Home";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import CreatePost from "./pages/CreatePost";
// import Martie from "./assets/imagens/m3.png";
// import Post from "./pages/Post";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listPost, setListPost] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      //console.log(response.data);
      setListPost(response.data);
    });
  }, []);

  return (
    <div className="App">

      {listPost.map((value, key)=>{
        return <div>{value.title}, {value.postText}, {value.username}</div>

        })
      }
      

      {/* <BrowserRouter>
        <div className="navbar">
          <Link to="/"> Home </Link>
          <Link to="/createpost"> Criar Post </Link>
        </div>

        <h1>Full Stack Web Development - ReactJS, NodeJS e MySQL! </h1>
        <img src={Martie} alt="Martie-Management" className="logo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
