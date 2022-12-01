import PropTypes from "prop-types";
export default function Header(props) {
  //   let { title } = props;
  let title = props.title;
  return <header className="Title">{title}</header>;
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
