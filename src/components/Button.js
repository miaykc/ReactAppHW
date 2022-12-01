import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
};
