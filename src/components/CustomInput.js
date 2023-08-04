import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : "".trimEnd()}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
