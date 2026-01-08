import * as Yup from "yup";

 const signUpSchema = Yup.object({
  name: Yup.string().min(2).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  // confirm_password: Yup.string()
  //   .oneOf([Yup.ref("password")], "Passwords must match")
  //   .required("Confirm password is required"),
});

export default signUpSchema;