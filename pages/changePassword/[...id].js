import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const initialValues = {
  password: "",
  repeatPassword: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length is not valid")
    .matches(
      /^(?=.*[A-Z]).(?=.*[a-z]).(?=.*[0-9]).(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
      "Invalid format"
    ),
  repeatPassword: Yup.string()
    .required("Confirm password is reqiured")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const ChangePassword = () => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [idvalue, setIdValue] = useState();

  const onSubmit = (values, submitProps) => {
    setTimeout(() => {
      submitProps.setSubmitting(false);
    }, 1500);

    const { password, repeatPassword } = values;
    axios
      .put(
        `https://vp.megaverse.today/api/v1/auth/changePassword/${token}/${idvalue}`,
        { password, repeatPassword },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        toast.success(res.data.message)
        window.location.href="/signin";
       
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message)
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

// catch the routes
  useEffect(() => {
    const { id = [] } = router.query;
    if (id) {
      setToken(id[0]);
      setIdValue(id[1]);
    }
  }, [router.query]);

  return (
    <div className="sign-up-form-container">
      <CloseIcon className="vrify-cancel-icon" sx={{ color: "white" }} />
      <h1 className="sign-up__heading">Create your new password</h1>
      <form onSubmit={formik.handleSubmit} className="signin-form-reset">
        <div className="signup-inputs-labels">
          <label className="signup-form__label">New Password:</label>
          <input
            className={
              formik.errors.password && formik.touched.password
                ? "signup-form_inputError"
                : "signup-form__input"
            }
            placeholder="Password"
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error-signup">{formik.errors.password}</div>
          )}

          <label className="signup-form__label">Confirm new password:</label>
          <input
            className={
              formik.errors.repeatPassword && formik.touched.repeatPassword
                ? "signup-form_inputError"
                : "signup-form__input"
            }
            placeholder="Confirm password"
            type="text"
            name="repeatPassword"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.repeatPassword && formik.touched.repeatPassword && (
            <div className="error-signup">{formik.errors.repeatPassword}</div>
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
            "Continue"
          )}
        </button>
      </form>
     
    </div>
  );
};

export default ChangePassword;
