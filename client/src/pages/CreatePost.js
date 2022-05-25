import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  let navigate = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Titulo é campo obrigatório!"),
    postText: Yup.string().required("Mensagen é campo obrigatório!"),
    username: Yup.string()
      .min(3)
      .max(15)
      .required("Author é obrigatório, no minomo (03) caracteres"),
  });

  const onSubmit = (data) => {
   
    axios.post("http://localhost:3001/posts", data).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Titulo da Mensagem: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="Ex: Olifrans Dev Full Stack..."
          />
          <label>Mensagem: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="Ex: Mensagem do Post..."
          />
          <label>Nome do Author: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Ex: Usuario do Author..."
          />
          <button type="submit"> Criar Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
