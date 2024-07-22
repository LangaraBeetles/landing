/* eslint-disable react/prop-types */
const Card = ({ children, className }) => {
  return <div className={`${className} rounded`}>{children}</div>;
};

export default Card;
