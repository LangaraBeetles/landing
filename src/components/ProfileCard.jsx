import Card from "./ui/Card";

/* eslint-disable react/prop-types */
const ProfileCard = ({ member }) => {
  return (
    <div>
      <Card bg="bg-yellow-50" rounded="rounded-md">
        <img src={member.img} alt="pooja" />
      </Card>
      <p>{member.name}</p>
    </div>
  );
};

export default ProfileCard;
