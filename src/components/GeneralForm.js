import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

const GeneralForm = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          className={errors.email ? "input-error" : "".trimEnd()}
          type="email"
          name="email"
          id="email"
          placeholder="Lütfen e-mail adresinizi giriniz..."
          value={values.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <p className="error">{errors.email}</p>}

      <div className="inputDiv">
        <label>Yaş</label>
        <input
          className={errors.age ? "input-error" : "".trimEnd()}
          type="number"
          name="age"
          id="age"
          placeholder="Lütfen yaşınızı giriniz..."
          value={values.age}
          onChange={handleChange}
        />
      </div>
      {errors.age && <p className="error">{errors.age}</p>}

      <div className="inputDiv">
        <label>Şifre</label>
        <input
          className={errors.password ? "input-error" : "".trimEnd()}
          type="password"
          name="password"
          id="password"
          placeholder="Lütfen şifrenizi giriniz..."
          value={values.password}
          onChange={handleChange}
        />
      </div>
      {errors.password && <p className="error">{errors.password}</p>}

      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          className={errors.confirmPassword ? "input-error" : "".trimEnd()}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Lütfen şifrenizi tekrar giriniz..."
          value={values.confirmPassword}
          onChange={handleChange}
        />
      </div>
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button
        disabled={isSubmitting}
        style={isSubmitting ? { background: "gray" } : { background: "" }}
        type="submit"
      >
        Kaydet
      </button>
    </form>
  );
};

export default GeneralForm;
