import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./routes/login";
import PreRegistration from "./routes/preregister";
import SignUp from "./routes/signup";
import Thanks from "./routes/thanks";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="preregister" element={<PreRegistration />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
