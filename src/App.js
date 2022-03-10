import React from "react";

import Hero from "./components/hero";
import Features from "./components/features";

export default function App() {
  return (
    <>
      <div className="bg-transparent">
        {/* <Nav /> */}
        <Hero />
        <Features />
      </div>
    </>
  );
}
