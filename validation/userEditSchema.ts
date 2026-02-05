import * as yup from "yup";

export const userEditSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  city: yup.string().trim().required("City is required"),
});
