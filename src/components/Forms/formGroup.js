import React from "react";

import Form from "react-bootstrap/Form";

const FormGroup = ({ type, name, label, formikProps, disabled = false }) => {
  const controlId = `form-${name}`;
  const value = formikProps.values.[name];
  const touched = formikProps.touched[name];
  const error = formikProps.errors[name];

  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} onChange={formikProps.handleChange} onBlur={formikProps.handleBlur} value={value}
        className={touched && error ? "is-invalid" : ""} disabled={disabled}
      />
      {touched && error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : null}
    </Form.Group>
  );
}

export default FormGroup;
