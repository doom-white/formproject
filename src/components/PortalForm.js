import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { advancedSchema } from "../schemas";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

const PortalForm = () => {
  return (
    <div className="portal">
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeHolder="Kullanıcı adınızı giriniz..."
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeHolder="Lütfen Üniversitenizi seçiniz..."
            >
              <option value="">Lütfen Üniversitenizi Seçiniz...</option>
              <option value="bogazici">Boğaziçi Üniversitesi </option>
              <option value="gsu">Galatasaray Üniversitesi </option>
              <option value="odtu">Orta-Doğu Teknik Üniversitesi </option>
              <option value="itu">İstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomCheckBox
              label="Kullanım koşullarını onaylıyorum."
              type="checkbox"
              name="isAccepted"
            />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/">Ana Form'a Git</Link>
    </div>
  );
};

export default PortalForm;
