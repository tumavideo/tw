import React from "react";

import Hero from "./components/hero";
import Insights from "./components/insights";
import Nav from "./components/nav";

export default function App() {
  return (
    <>
      <div className="bg-transparent">
        <Nav />
        <Hero />
        <Insights />
      </div>
    </>
  );
}
