import * as yup from "yup";

export const SignUpValidactionSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "password min 5 char"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
