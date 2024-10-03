import PropTypes from "prop-types";

function Button({ text, handle }) {
  return (
    <div
      className="button-style"
      onClick={() => handle(text)}
      style={{
        backgroundColor: text === "AC" ? "green" : text === "=" ? "black" : "",
      }}
    >
      <span className="number-span">{text}</span>
    </div>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Button;
