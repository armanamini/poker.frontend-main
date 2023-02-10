import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";

const initialValues = {
  email: "",
  password: "",
  displayName: "",
  terms1: false,
  terms2: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length is not valid").max(12,"Password length can not be more than 12")
    .matches(
      /^(?=.*[A-Z]).(?=.*[a-z]).(?=.*[0-9]).(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
      "Invalid format"
    ),
  displayName: Yup.string()
    .required("Name is reqiured")
    .max(12, "Name length is not valid"),
  terms1: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
  terms2: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const SignupPage = () => {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [showrules, setShowrules] = useState(false);
  const [showterms, setShowterms] = useState(true);
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);

  const onSubmit = (values, submitProps) => {
    setTimeout(() => {
      submitProps.setSubmitting(false);
    }, 1500);
    const { email, password, displayName } = values;

    axios
      .post("https://vp.megaverse.today/api/v1/auth/signUp", {
        email,
        displayName,
        password,
      })
      .then((res) => {
        console.log(res);

        // get token from api and save it to the local storage and cookie
        const token = res.data.token;
        localStorage.setItem("identifier", token);
        document.cookie = `identifier=${token}`;
        document.cookie= `verify=false`

        toast.success(res.data.message, {
          duration: 4000,
          icon: "👏",
        });
        // router.reload("/verifyemail");
        window.location.href = '/verifyemail'
      })
      .catch((err) => {
        console.log(err);
   
        const result = err?.response?.data?.data;
        if (Array.isArray(result)) {
          result.forEach(e => toast.error(e));
          return;
        }
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
      <Head>
        <title>Signup</title>
        <meta name="description" content="Signup vpPoker"></meta>
      </Head>
      {!showrules ? (
        <>
          <CloseIcon
            onClick={() => {
              router.push("/");
            }}
            className="vrify-cancel-icon"
            sx={{ color: "white" }}
          />
          <h1 className="sign-up__heading">Create your Account</h1>
          <form onSubmit={formik.handleSubmit} className="signup-form">
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
                    Create password:
                  </label>
                  <div
                    onClick={() => setVisiblePassword(!visiblePassword)}
                    className="visible-icon-container"
                  >
                    {visiblePassword ? (
                      <VisibilityIcon className="visible-icon" />
                    ) : (
                      <VisibilityOffIcon className="visible-icon" />
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
                <ul style={{ marginTop: "26px" }} className="signup-ul">
                  <li>minimum of 8 charchter</li>
                  <li> At least 1 uppercase character</li>
                  <li> At least 1 lowercase character</li>
                  <li>At least 1 special symbol (!@#$%)</li>
                  <li>At least 1 number</li>
                </ul>
              </div>

              <div style={{ display: "flex", marginTop: "-10px" }}>
                <div>
                  <label className="signup-form__label">Display name:</label>
                  <input
                    className={
                      formik.errors.displayName && formik.touched.displayName
                        ? "signup-form_inputError"
                        : "signup-form__input"
                    }
                    placeholder="@"
                    type="text"
                    name="displayName"
                    value={formik.values.displayName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.displayName && formik.touched.displayName && (
                    <div className="error-signup">
                      {formik.errors.displayName}
                    </div>
                  )}
                </div>
                <ul style={{ marginTop: "27px" }} className="signup-ul">
                  <li>Up to 12 characters</li>
                  <li> May include special characters</li>
                  <li> May not include spaces</li>
                </ul>
              </div>

              <div className="signup-checkbox-wrapper">
                <Checkbox
                  onChange={formik.handleChange}
                  checked={formik.values.terms1}
                  value={true}
                  name="terms1"
                  color="secondary"
                  className="signup-checkbox"
                />

                <p className="signup-terms-p">
                  I agree to the
                  <span
                    onClick={() => setShowrules(true)}
                    style={{
                      color: "#0075FF",
                      marginLeft: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Terms and Conditions
                  </span>
                  , and{" "}
                  <span
                    onClick={() => setShowrules(true)}
                    style={{
                      color: "#0075FF",
                      marginLeft: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
              {formik.errors.terms1 && formik.touched.terms1 && (
                <div className="terms-erorr">{formik.errors.terms1}</div>
              )}
              <div className="signup-checkbox-wrapper">
                <Checkbox
                  onChange={formik.handleChange}
                  checked={formik.values.terms2}
                  value={true}
                  name="terms2"
                  color="secondary"
                  className="signup-checkbox"
                />

                <p className="signup-terms-p">
                  I agree to receive marketing emails from Virtue Gaming
                </p>
              </div>
              {formik.errors.terms2 && formik.touched.terms2 && (
                <div className="terms-erorr">{formik.errors.terms2}</div>
              )}

              <button
                type="submit"
                disabled={!formik.isValid}
                className="signup-btn"
              >
                {formik.isSubmitting ? (
                  <CircularProgress size={30} color="secondary" />
                ) : (
                  "Continue"
                )}
                {/* {!formik.isValid ? "Please fill all fields" : "Sign Up"} */}
              </button>
            </div>
          </form>
          <p className="have-acc">
            Have an account?{" "}
            <Link href="/signin">
              <a style={{ textDecoration: "none" }}>
                <span style={{ color: "#0075FF" }}>Sign in</span>
              </a>
            </Link>
          </p>
        </>
      ) : (
        <>
          <CloseIcon
            onClick={() => {
              setShowrules(false);
            }}
            className="vrify-cancel-icon"
            sx={{ color: "white" }}
          />
          <div className="terms-texts">
            <p
              onClick={() => {
                setShowterms(true);
                setActive(true);
                setActive2(false);
              }}
              className={`terms-text-1 ${active ? "active-tab" : ""}`}
            >
              Terms of Conditions
            </p>
            <p
              onClick={() => {
                setShowterms(false);
                setActive2(true);
                setActive(false);
              }}
              className={`terms-text-2 ${active2 ? "active-tab" : ""}`}
            >
              Privacy Policy
            </p>
          </div>
          <div className="terms-content">
            {showterms ? (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                eleifend quam adipiscing vitae proin. Felis bibendum ut
                tristique et egestas. Elit duis tristique sollicitudin nibh. A
                erat nam at lectus urna duis convallis. Scelerisque mauris
                pellentesque pulvinar pellentesque habitant morbi. Maecenas
                volutpat blandit aliquam etiam erat velit scelerisque. Arcu dui
                vivamus arcu felis bibendum ut tristique et egestas. Odio aenean
                sed adipiscing diam. At volutpat diam ut venenatis tellus in
                metus vulputate eu. Adipiscing elit ut Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Quis
                eleifend quam adipiscing vitae proin. Felis bibendum ut
                tristique et egestas. Elit duis tristique sollicitudin nibh. A
                erat nam at lectus urna duis convallis. Scelerisque mauris
                pellentesque pulvinar pellentesque habitant morbi. Maecenas
                volutpat blandit aliquam etiam erat velit scelerisque. Arcu dui
                vivamus arcu felis bibendum ut tristique et egestas. Odio aenean
                sed adipiscing diam. At volutpat diam ut venenatis tellus in
                metus vulputate eu. Adipiscing elit ut Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
            ) : (
              <p>
                privacy rules ... nam at lectus urna duis convallis. Scelerisque
                mauris pellentesque pulvinar pellentesque habitant morbi.
                Maecenas volutpat blandit aliquam etiam erat velit scelerisque.
                Arcu dui vivamus arcu felis bibendum ut tristique et egestas.
                Odio aenean sed adipiscing diam. At volutpat diam ut venenatis
                tellus in metus vulputate eu. Adipiscing elit ut Lorem ipsum dol
              </p>
            )}
          </div>

          <button
            onClick={() => setShowrules(false)}
            className="understand-btn"
          >
            Understand
          </button>
        </>
      )}
    </div>
  );
};

export default SignupPage;

{
  /* <div className="sign-up-form-container">
<h1 className="sign-up__heading">Create your Account</h1>
<form onSubmit={formik.handleSubmit} className="signup-form">
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
          Create password:
        </label>
        <div
          onClick={() => setVisiblePassword(!visiblePassword)}
          className="visible-icon-container"
        >
          {visiblePassword ? (
            <VisibilityIcon className="visible-icon" />
          ) : (
            <VisibilityOffIcon className="visible-icon" />
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
      <ul style={{ marginTop: "26px" }} className="signup-ul">
        <li>minimum of 8 charchter</li>
        <li> At least 1 uppercase character</li>
        <li> At least 1 lowercase character</li>
        <li>At least 1 special symbol (!@#$%)</li>
        <li>At least 1 number</li>
      </ul>
    </div>

    <div style={{ display: "flex", marginTop: "-10px" }}>
      <div>
        <label className="signup-form__label">Display name:</label>
        <input
          className={
            formik.errors.displayName && formik.touched.displayName
              ? "signup-form_inputError"
              : "signup-form__input"
          }
          placeholder="@"
          type="text"
          name="displayName"
          value={formik.values.displayName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.displayName && formik.touched.displayName && (
          <div className="error-signup">{formik.errors.displayName}</div>
        )}
      </div>
      <ul style={{ marginTop: "27px" }} className="signup-ul">
        <li>Up to 12 characters</li>
        <li> May include special characters</li>
        <li> May not include spaces</li>
      </ul>
    </div>

    <div className="signup-checkbox-wrapper">
      <Checkbox
        onChange={formik.handleChange}
        checked={formik.values.terms1}
        value={true}
        name="terms1"
        color="secondary"
        className="signup-checkbox"
      />

      <p className="signup-terms-p">
        I agree to the
        <span style={{ color: "#0075FF", marginLeft: "5px" }}>
          Terms and Conditions
        </span>{" "}
        , and Privacy Policy.
      </p>
    </div>
    {formik.errors.terms1 && formik.touched.terms1 && (
      <div className="terms-erorr">{formik.errors.terms1}</div>
    )}
    <div className="signup-checkbox-wrapper">
      <Checkbox
        onChange={formik.handleChange}
        checked={formik.values.terms2}
        value={true}
        name="terms2"
        color="secondary"
        className="signup-checkbox"
      />

      <p className="signup-terms-p">
        I agree to receive marketing emails from Virtue Gaming
      </p>
    </div>
    {formik.errors.terms2 && formik.touched.terms2 && (
      <div className="terms-erorr">{formik.errors.terms2}</div>
    )}

    <button
      type="submit"
      disabled={!formik.isValid}
      className="signup-btn"
    >
      Continue
    </button>
  </div>
</form>
<p className="have-acc">
  Have an account?{" "}
  <Link href="/signin">
    <a style={{ textDecoration: "none" }}>
      <span style={{ color: "#0075FF" }}>Sign in</span>
    </a>
  </Link>
</p>
</div> */
}
