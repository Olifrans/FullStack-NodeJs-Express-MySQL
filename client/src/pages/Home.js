import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listPost, setListPost] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListPost(response.data);
    });
  }, []);

  return (
    <div>
      {listPost.map((value, key) => {
        return (
          <div
            key={key}
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title"> {value.title} </div>
            <div className="body"> {value.postText} </div>
            <div className="footer"> {value.username} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
