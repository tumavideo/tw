import React from "react";

import assets from "../assets";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <img src={assets.logo} alt="TumaVideo logo" />
    </div>
  );
}
