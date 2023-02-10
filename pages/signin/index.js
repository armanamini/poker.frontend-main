import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";

const initialValues = {
  email: "",
  password: "",
  terms1: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length is not valid")
    .matches(
      /^(?=.*[A-Z]).(?=.*[a-z]).(?=.*[0-9]).(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
      "Invalid format"
    ),
});

const SignupPage = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const router = useRouter();
  const onSubmit = (values,submitProps) => {
    setTimeout(() => {
      submitProps.setSubmitting(false);
    }, 1500);
    const {email,password} = values;
    axios
    .post(
      "https://vp.megaverse.today/api/v1/auth/signIn",
      { email, password },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data.message);
      const token = res.data.token;
      localStorage.setItem("identifier",token)
      document.cookie = `identifier=${token}`
      // document.cookie = `verify=${res.verify}`
      toast.success(res.data.message, {
        duration: 4000,
        icon: "👏",
      });
      window.location.href="/";
    })
    .catch((err) => {
      console.log(err);
      err.code === "ERR_NETWORK"? toast.error("Something went wrong"):  toast.error(err?.response?.data?.message, {
        duration: 4000,
        icon: "👎",
      });

  
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
       <CloseIcon onClick={()=>{router.push("/")}} className="vrify-cancel-icon" sx={{ color: "white" }} />
      <h1 style={{ marginTop: "30px" }} className="sign-up__heading">
        Login
      </h1>
      <form onSubmit={formik.handleSubmit} className="signin-form">
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

          <div style={{ display: "flex" }}>
            <div>
              <label className="signup-form__label" type="password">
                Password:
              </label>
              <div
                onClick={() => setVisiblePassword(!visiblePassword)}
                className="visible-icon-container"
              >
                {visiblePassword ? (
                  <VisibilityIcon className="visible-icon-signin" />
                ) : (
                  <VisibilityOffIcon className="visible-icon-signin" />
                )}
              </div>

              <input
                className={
                  formik.errors.password && formik.touched.password
                    ? "signup-form_inputError"
                    : "signup-form__input"
                }
                placeholder="Password"
                type={visiblePassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.password && formik.touched.password && (
                <div className="error-signup">{formik.errors.password}</div>
              )}
            </div>
          </div>

          <div className="signin-checkbox-wrapper">
            <Checkbox
              onChange={formik.handleChange}
              checked={formik.values.terms1}
              value={true}
              name="terms1"
              color="secondary"
              className="signup-checkbox"
            />

            <p className="signup-terms-p">Remember me?</p>
          </div>
          {formik.errors.terms1 && formik.touched.terms1 && (
            <div className="terms-erorr">{formik.errors.terms1}</div>
          )}

          <button
            type="submit"
            disabled={!formik.isValid}
            className="signin-btn"
          >
             {formik.isSubmitting ? (
                  <CircularProgress size={30} color="secondary" />
                ) : (
                  "Continue"
                )}
          </button>

          <div onClick={()=>router.push("/forgetpass")}>
            <p className="forget-pass">Forgot password?</p>
          </div>
        </div>
      </form>
      <p className="have-acc">
        Need an account?{" "}
        <Link href="/signup">
          <a style={{ textDecoration: "none" }}>
            <span style={{ color: "#0075FF" }}>Sign up</span>
          </a>
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;

























{/* <div className="sign-up-form-container">
<h1 style={{ marginTop: "30px" }} className="sign-up__heading">
  Login
</h1>
<form onSubmit={formik.handleSubmit} className="signin-form">
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

    <div style={{ display: "flex" }}>
      <div>
        <label className="signup-form__label" type="password">
          Password:
        </label>
        <div
          onClick={() => setVisiblePassword(!visiblePassword)}
          className="visible-icon-container"
        >
          {visiblePassword ? (
            <VisibilityIcon className="visible-icon-signin" />
          ) : (
            <VisibilityOffIcon className="visible-icon-signin" />
          )}
        </div>

        <input
          className={
            formik.errors.password && formik.touched.password
              ? "signup-form_inputError"
              : "signup-form__input"
          }
          placeholder="Password"
          type={visiblePassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.errors.password && formik.touched.password && (
          <div className="error-signup">{formik.errors.password}</div>
        )}
      </div>
    </div>

    <div className="signin-checkbox-wrapper">
      <Checkbox
        onChange={formik.handleChange}
        checked={formik.values.terms1}
        value={true}
        name="terms1"
        color="secondary"
        className="signup-checkbox"
      />

      <p className="signup-terms-p">Remember me?</p>
    </div>
    {formik.errors.terms1 && formik.touched.terms1 && (
      <div className="terms-erorr">{formik.errors.terms1}</div>
    )}

    <button
      type="submit"
      disabled={!formik.isValid}
      className="signin-btn"
    >
      Continue
    </button>

    <div>
      <p className="forget-pass">Forgot password?</p>
    </div>
  </div>
</form>
<p className="have-acc">
  Need an account?{" "}
  <Link href="/signup">
    <a style={{ textDecoration: "none" }}>
      <span style={{ color: "#0075FF" }}>Sign up</span>
    </a>
  </Link>
</p>
</div> */}