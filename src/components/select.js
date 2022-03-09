import React from "react";

export default function Select({ label, menuItems, onChange, title }) {
  return (
    <>
      <label>{title}</label>
      <select
        className="full form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-6
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-lg
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      leading-5
      shadow-md
      focus:ring-2
      focus:ring-green-500
      focus:ring-opacity-50"
        aria-label=".form-select-lg example"
        onChange={onChange}
      >
        <option selected>{label}</option>
        {menuItems.map((item, index) => (
          <option value={index}>{item}</option>
        ))}
      </select>
    </>
  );
}
