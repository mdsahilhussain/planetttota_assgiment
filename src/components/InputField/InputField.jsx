import React, { useState } from "react";
import "./inputField.css";
import { MdOutlineCheck } from "react-icons/md";

function InputField(props) {
  const {
    id,
    label,
    onChange,
    typeText,
    index,
    errorMessage,
    randomBNV,
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
        {randomBNV === undefined ? (
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={focusedHandler}
            focused={focused.toString()}
            className="scale-up-center"
          />
        ) : (
          <div className="inputFiled scale-up-center">
            <input
              {...inputProps}
              onChange={onChange}
              onBlur={focusedHandler}
              focused={focused.toString()}
            />
            {}
            <div>
              <MdOutlineCheck
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  padding: "0.2rem",
                  marginLeft: "0.5rem",
                }}
              />
            </div>
          </div>
        )}

        <span>{errorMessage}</span>
      </div>
    </div>
  );
}

export default InputField;
