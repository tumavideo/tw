import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import bgImage from "../assets/black-businesscopy.jpeg";
import logo from "../assets/flex-circle-green.svg";
import FormInput from "../components/formInput";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from "../firebase";

import "./preregister.css";
import Select from "../components/select";

export default function PreRegistration() {
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getDatabase(firebaseApp);

  const defaultValues = {
    age: "",
    business: "",
    education: "",
    email: "",
    gender: "",
    location: "",
    name: "",
    number: "",
    obstacles: "",
    occupation: "",
    sectors: "",
    status: "",
  };

  const [values, setValues] = useState(defaultValues);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const personalStatus = ["Entrepreneur", "Employed", "Unemployed"];

  const educationLevel = [
    "Primary",
    "Secondary",
    "Certificate",
    "Diploma",
    "Degree",
    "Masters",
    "Doctorate",
    "Not applicable",
  ];

  const provinces = [
    "Central",
    "Copperbelt",
    "Eastern",
    "Luapula",
    "Lusaka",
    "Muchinga",
    "North-Western",
    "Western",
    "Northern",
    "Southern",
  ];

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
      // pattern: phoneRegExp,
    },
    {
      id: 5,
      name: "age",
      type: "date",
      placeholder: "Birthday",
      label: "Age",
    },
    {
      id: 6,
      name: "gender",
      custom: (
        <Select
          key="6"
          name="gender"
          onChange={(e) => onChange(e)}
          label={"Please choose your gender"}
          menuItems={["Male", "Female", "Other"]}
          title={"Gender"}
        />
      ),
    },
    {
      id: 7,
      name: "location",
      custom: (
        <Select
          key="7"
          name="location"
          onChange={(e) => onChange(e)}
          label={"Please choose your province"}
          menuItems={provinces}
          title={"Province"}
        />
      ),
    },
    {
      id: 8,
      name: "city",
      type: "text",
      placeholder: "What city do you live in?",
      label: "City",
    },
    {
      id: 9,
      name: "status",
      custom: (
        <div className="mb-2">
          <Select
            key="9"
            name="status"
            onChange={(e) => onChange(e)}
            label={"What is your employment status?"}
            menuItems={personalStatus}
            title={"Employment"}
          />
        </div>
      ),
    },
    {
      id: 10,
      name: "education",
      custom: (
        <Select
          key="10"
          name="education"
          onChange={(e) => onChange(e)}
          label={"Please choose your education level"}
          menuItems={educationLevel}
          title={"Education"}
        />
      ),
    },
    {
      id: 11,
      name: "business",
      type: "text",
      placeholder: "What business do you do?",
      label: "Business",
    },
    {
      id: 12,
      name: "occupation",
      type: "text",
      placeholder: "What is your current occupation?",
      label: "Occupation",
    },
    {
      id: 13,
      name: "obstacles",
      custom: (
        <p className="full">
          <label>Obstacles</label>
          <textarea
            className="leading-5 rounded-lg shadow-md focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            name="obstacles"
            rows="5"
            placeholder="What are your reasons/challenges?"
            onChange={onChange}
          ></textarea>
        </p>
      ),
    },
    {
      id: 14,
      name: "sectors",
      type: "text", // multi-text
      placeholder: "What sectors are you interested in?",
      label: "Sectors",
    },
  ];

  let formRef = React.useRef(null);

  const onSubmit = () => {
    set(ref(db, "users/" + new Date().getTime().toString()), {
      age: values.age,
      business: values.business,
      education: values.education,
      email: values.email,
      gender: values.gender,
      location: values.location,
      name: values.name,
      number: values.number,
      obstacles: values.obstacles,
      occupation: values.occupation,
      sectors: values.sectors,
      status: values.status,
    }).then(() => {
      formRef.current.reset();
    });
  };

  const { handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  return (
    <div className="signup">
      <section
        className="relative pt-16 pb-0 md:py-32 bg-white"
        style={{ backgroundImage: bgImage, backgroundPosition: "center" }}
      >
        <div className="container px-4 mx-auto mb-16">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="contact">
              <div className="mb-6 text-center">
                <Link className="inline-block mb-6" to="/">
                  <img className="h-16" src={logo} alt="" />
                </Link>
                <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                  Pre Registration
                </h3>
                {formState.isSubmitted && (
                  <div className="alert">
                    Your information has been registered
                  </div>
                )}
              </div>
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                {inputs.map((input) =>
                  input.custom ? (
                    input.custom
                  ) : (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  )
                )}
                <button
                  className="full inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  type="submit"
                  disabled={!formState.isValid || formState.isSubmitting}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <img
          className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
          src={bgImage}
          alt=""
        /> */}
      </section>
    </div>
  );
}
