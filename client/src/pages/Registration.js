import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Registration() {
  let navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Usuario é obrigatório"),
    password: Yup.string().min(4).max(20).required("Senha é obrigatório"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log(data);
      navigate("/");
    });
  };

  return (
    <div className="!!!!!!">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Usuário: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Digite sua usuário..."
          />

          <label>Senha: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Digite sua senha..."
          />

          <button type="submit">Cadastro Usuário</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
