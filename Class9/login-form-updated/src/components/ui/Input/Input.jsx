import React from "react";
import PropTypes from "prop-types";

const styles = {
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  inputLabel: {
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "6px",
    display: "flex",
    justifyContent: "center",
  },
  inputTag: {
    padding: "0.5rem",
    borderRadius: "0.25rem",
    border: "1px solid #D1D5DB",
    width: "max-content",
    marginBottom: "1rem",
  },
};

const Input = ({
  type = "text",
  name,
  value,
  placeholder = "Enter text",
  required,
  minLength,
  maxLength,
  onChange,
  inputLabel,
}) => {
  return (
    <div style={styles.inputContainer}>
      <label style={styles.label} htmlFor={name}>
        {name}
      </label>
      <label style={styles.inputLabel}>
        <input
          style={styles.inputTag}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
        {inputLabel}
      </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "tel",
    "url",
    "search",
    "date",
    "time",
    "datetime-local",
    "month",
    "week",
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  inputLabel: PropTypes.string,
};

export default Input;
