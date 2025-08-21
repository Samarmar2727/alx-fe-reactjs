import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be 6+ chars").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik submitted:", values);
    alert("Formik user registered!");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <h2>Formik Registration Form</h2>
        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />
        </div>
        <div>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
        </div>
        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
