import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir e-mail giriniz!")
    .required("E-mail alanını boş geçemezsiniz!"),

  age: yup
    .number()
    .positive("Yaşınız 0'dan küçük ya da 0'a eşit olamaz!")
    .integer("Yaşınız tam sayı olmalıdır!")
    .required("Yaş alanını boş geçemezsiniz!"),

  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakterden oluşmalı")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şifre alanı boş geçilemez!"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor!")
    .required("Tekrar şifre alanı boş geçilemez!"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adınız en az 3 karakterden oluşmalı")
    .required("Kullanıcı adı alanını boş geçemezsiniz!"),

  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtu", "itu"], "Lütfen Üniversitenizi seçiniz!")
    .required("Lütfen Üniversitenizi seçiniz!"),

  isAccepted: yup
    .boolean()
    .oneOf([true], "Lütfen kullanım koşullarını kabul ediniz."),
});
