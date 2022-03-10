import React, { useState } from "react";
import { Link } from "react-router-dom";

import bgImage from "../assets/black-businesscopy.jpeg";
import logo from "../assets/flex-circle-green.svg";
import FormInput from "../components/formInput";

export default function SignUp() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email@work.co.zm",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Name cannot be empty!",
      label: "Name",
      required: true,
    },
    {
      id: 4,
      name: "number",
      type: "text",
      placeholder: "Phone number",
      errorMessage: "It should be a valid phone number!",
      label: "Contact Number (optional)",
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "************",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup">
      <section
        className="relative pt-16 pb-0 md:py-32 bg-white"
        style={{ backgroundImage: bgImage, backgroundPosition: "center" }}
      >
        <div className="container px-4 mx-auto mb-16">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="max-w-sm mx-auto">
              <div className="mb-6 text-center">
                <Link className="inline-block mb-6" to="/">
                  <img className="h-16" src={logo} alt="" />
                </Link>
                <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                  Register for an account
                </h3>
                <p className="text-lg text-gray-500 font-medium">
                  Start your job search
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="w-full md:w-1/2">
                    <label className="relative inline-flex items-center">
                      <input
                        className="form-checkbox appearance-none"
                        type="checkbox"
                      />
                      <img
                        className="absolute top-1/2 transform -translate-y-1/2 left-0"
                        src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                        alt=""
                      />
                      <span className="ml-7 text-xs text-gray-800 font-medium">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <div className="w-full md:w-auto mt-1">
                    <Link
                      className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                      to="/"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <button
                  className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  type="submit"
                >
                  Register
                </button>
                <p className="text-center">
                  <span className="text-xs font-medium">Have an account? </span>
                  <Link
                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                    to="/login"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <img
          className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
          src={bgImage}
          alt=""
        />
      </section>
    </div>
  );
}
