import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Handling Demo</h1>

      {/* Controlled Components Form */}
      <RegistrationForm />

      <hr />

      {/* Formik Form */}
      <FormikForm />
    </div>
  );
}
