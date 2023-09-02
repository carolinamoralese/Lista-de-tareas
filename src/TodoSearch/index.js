import React from "react";
import "./todoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="input"
      placeholder="Salir con el perro"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };
