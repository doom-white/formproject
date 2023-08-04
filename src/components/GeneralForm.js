import React from "react";
import { useFormik } from "formik";

const GeneralForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  return (
    <form>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Lütfen e-mail adresinizi giriniz..."
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Lütfen yaşınızı giriniz..."
          value={values.age}
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Lütfen şifrenizi giriniz..."
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Lütfen şifrenizi tekrar giriniz..."
          value={values.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default GeneralForm;
