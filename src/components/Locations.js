import React from "react";

const Locations = ({ name, changeLocationFunction }) => {
  const handleOnChange = (event) => {
    switch (event.target.value) {
      case "london":
        changeLocationFunction("London", 51.51, 0.12);
        break;
      case "toronto":
        changeLocationFunction("Toronto", 43.39, 79.23);
        break;
      case "sydney":
        changeLocationFunction("Sydney", 33.86, 151.2);
        break;
      case "maputo":
        changeLocationFunction("Maputo", 25.96, 32.57);
        break;
      case "paris":
        changeLocationFunction("Paris", 48.85, 2.35);
        break;
      default:
        break;
    }
  };

  return (
    <select
      className="mb-4 p-2 rounded-md w-72 border-solid border-4 border-cyan-800 bg-sky-200 text-slate-800"
      onChange={handleOnChange}
    >
      <option selected>Choose your city...</option>
      <option value="london">London/England</option>
      <option value="toronto">Toronto/Canada</option>
      <option value="sydney">Sydney/Australia</option>
      <option value="maputo">Maputo/Mozambique</option>
      <option value="paris">Paris/France</option>
    </select>
  );
};

export default Locations;
