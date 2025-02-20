import PropTypes from "prop-types";

const InputTag = ({
  typeValue,
  name,
  minValue,
  onChangeFunc,
  inputLabel,
  placeHolder,
}) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>{inputLabel}</label>
      <input
        type={typeValue}
        name={name}
        minLength={minValue}
        onChange={onChangeFunc}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputTag;

InputTag.propTypes = {
  typeValue: PropTypes.string,
  name: PropTypes.string,
  minValue: PropTypes.number,
  onChangeFunc: PropTypes.func,
  inputLabel: PropTypes.string,
  placeHolder: PropTypes.string,
};
