import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    //setCategories((categories) => [inputValue, ...categories]);
    setinputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onsubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.PropTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
