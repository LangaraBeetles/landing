import Card from "./ui/Card";

/* eslint-disable react/prop-types */
const ProfileCard = ({ member }) => {
  return (
    <div>
      <Card className=" bg-yellow-50">
        <img src={member.img} alt="pooja" />
      </Card>
      <p>{member.name}</p>
    </div>
  );
};

export default ProfileCard;
