import { useField } from "formik";
import React from "react";

const CustomCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <label>{label}</label>
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : "".trimEnd()}
        />
      </div>
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomCheckBox;
