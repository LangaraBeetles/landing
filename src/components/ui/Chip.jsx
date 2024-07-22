/* eslint-disable react/prop-types */
const Chip = ({ label }) => {
  return (
    <div className="bg-baltic-green-50 rounded-xl w-fit px-3 py-2">
      <p className="text-baltic-green-700 font-bold">{label}</p>
    </div>
  );
};
export default Chip;
