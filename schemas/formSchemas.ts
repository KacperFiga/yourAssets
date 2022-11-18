import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid email please")
    .required("Enter your email please"),
});
