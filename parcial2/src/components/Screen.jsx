import PropTypes from "prop-types"

function Screen({ number }) {
  return (
    <div id="screen">
      <span>{number}</span>
    </div>
  );
}

Screen.propTypes={
    number : PropTypes.string.isRequired
}
 
export default Screen