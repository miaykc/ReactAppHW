import PropTypes from "prop-types";

export default function Icon(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
};
