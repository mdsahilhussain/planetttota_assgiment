import React, { useState } from "react";
import "./inputField.css";

function InputField(props) {
  const {
    id,
    label,
    onChange,
    typeText,
    index,
    errorMessage,
    ...inputProps
  } = props;
  const [focused, setFocused] = useState(false);

  const focusedHandler = () => {
    setFocused(true);
  };
  return (
    <div>
      <div className="formInput">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={focusedHandler}
          focused={focused.toString()}
        />

        <span>{errorMessage}</span>
      </div>
    </div>
  );
}

export default InputField;
