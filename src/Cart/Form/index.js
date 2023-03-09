import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
import logo from '../../Image/logo.svg'

//import OnSecondPageButton from "../Button";
//import React,{useState} from 'react';
//import OnSecondPageButton from "./Cart/Botton/indexButton.js"
/*function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[dexem]+@[mail]+\.[ru]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}*/

/*function validatePassword(value) {
  let error;
  if (value === "") {
    error = "Wrong password";
  }
  return error;
}
function OnSecondPageButton(value) {
  onclick () {
    window.location.assign('http://localhost:3000/about');
  }
  
    return (
    <button  className="submit" type="onSubmit"  onClick={(e)}> Войти </button>
    );
  }
  */
const Cart = () => {
  const navigate = useNavigate();
  const  go = () => navigate("/about");
  const validationsSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'), 
  })

  return (
    <div className="Forma">
       <div className="logo">
            <img  src={logo} alt="" />
        </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, onClick }) => (
          <Form className="formick">
            <Field
              className="forms"
              name="email"
              type={"email"}
              value={values.email}
              placeholder="Электронная почта"
            />
              {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

            <Field
              className="forms"
              name="password"
              type={"password"}
              onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Пароль"
            />
                 {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
        <button className="submit"  type={"submit"} onClick={go}   disabled={!isValid || !dirty}>
          {" "}
          Войти{" "}
        </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Cart;

/*
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field name="password" validate={validatePassword} />
          {errors.password && touched.password && <div>{errors.password}</div>}
          { Trigger field-level validation
           imperatively }
          <button type="button" onClick={() => validateField('password')}>
            Check password
          </button>
          {/* Trigger form-level validation
           imperatively }
          <button
            type="button"
            onClick={() => validateForm().then(() => console.log('blah'))}
          >
            Validate All
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);*/
/*const Form = () => {
  return (
    <div>
      <Formik
        initialValues={{ password: "", email: "" }}
        validateOnBlur
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          let schema = yup.object().shape({
            email: yup.string().email(),
          });
        }}
      >
        <form className="formick">
          <Field
            className="forms"
            name="email"
            type="email"
            placeholder="Электронная почта"
          />
          <Field
            className="forms"
            name="password"
            type="text"
            placeholder="Пароль"
          />
        </form>
      </Formik>
    </div>
  );
};*/
