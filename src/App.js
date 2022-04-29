import React from "react";

import Features from "./components/features";
import Hero from "./components/hero";
import Nav from "./components/nav";

export default function App() {
  return (
    <>
      <div className="bg-transparent">
        <Nav />
        <Hero />
        <Features />
      </div>
    </>
  );
}
