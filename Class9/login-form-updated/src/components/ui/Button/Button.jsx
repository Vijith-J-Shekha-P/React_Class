import PropTypes from "prop-types";
const Button = ({ type = "button", buttonTitle, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {buttonTitle}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  buttonTitle: PropTypes.string,
  onClick: PropTypes.func,
};
