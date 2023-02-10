import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Format"),
});

const SignupPage = () => {
  const router = useRouter();

  const onSubmit = (values, submitProps) => {
    setTimeout(() => {
      submitProps.setSubmitting(false);
    }, 1500);
    const { email } = values;
    console.log(email);

    // with AXIOS
    axios
      .post("https://vp.megaverse.today/api/v1/auth/resetPassword", { email })
      .then((res) => {
        console.log(res.data);
        !res.data.success
          ? toast.error(res.data.message)
          : toast.success(res.data.message);
        res.data.success ? router.push("/forgetpassverify") : null;
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        toast.error(err?.response?.data?.message);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="sign-up-form-container">
      <CloseIcon
        onClick={() => {
          router.push("/");
        }}
        className="vrify-cancel-icon"
        sx={{ color: "white" }}
      />
      <h1 style={{ marginTop: "30px" }} className="sign-up__heading">
        Password reset
      </h1>
      <p className="pass-reset-text">We will send you a password reset code</p>
      <form onSubmit={formik.handleSubmit} className="signin-form-reset">
        <div className="signup-inputs-labels">
          <label className="signup-form__label">Email Address:</label>
          <input
            className={
              formik.errors.email && formik.touched.email
                ? "signup-form_inputError"
                : "signup-form__input"
            }
            placeholder="Email Address"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error-signup">{formik.errors.email}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={!formik.isValid}
          className="signin-btn-forget-pass"
        >
          {formik.isSubmitting ? (
            <CircularProgress size={30} color="secondary" />
          ) : (
            "Send Code"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
