import { Accommodation } from "@/app/types";

interface Props {
  accommodation: Accommodation
}

const AccommodationCard = ({ accommodation }:Props) => {
  return (
    <div className="bg-pink">
      <h2 className="text-lg font-bold mt-4">{accommodation.name}</h2>
        {accommodation.description}
    </div>
  );
};

export default AccommodationCard;