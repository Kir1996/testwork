import { Formik, Field, Form} from "formik";
//import * as yup from "yup";
//import OnSecondPageButton from "../Button";
//import React,{useState} from 'react';
//import OnSecondPageButton from "./Cart/Botton/indexButton.js"
function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[dexem]+@[mail]+\.[ru]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (value === '') {
    error = 'Wrong password';
  }
  return error;
}
const Forma = () => {
  return (
    <div>
     <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form className="formick">
          <Field className="forms" name="email" validate={validateEmail} placeholder="Электронная почта"/>
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field className="forms" name="password" validate={validatePassword} placeholder="Пароль" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </Form>
      )}
    </Formik>
    </div>
  );
};

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
export default Forma;
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