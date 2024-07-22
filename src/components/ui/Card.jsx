/* eslint-disable react/prop-types */
const Card = ({ children, bg, rounded = "rounded", p = "p-0", flex = "" }) => {
  return <div className={`${bg} ${rounded} ${p} ${flex}`}>{children}</div>;
};

export default Card;
