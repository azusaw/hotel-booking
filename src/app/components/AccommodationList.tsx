import Grid from "@mui/material/Grid";
import { Accommodation } from "@/app/types";
import AccommodationCard from "@/app/components/AccommodationCard";

interface Props {
  accommodations: Accommodation[];
}

const AccommodationList = ({ accommodations }: Props) => {
  return (
    <Grid container spacing={2}>
      {accommodations.map((accommodation) => (
        <Grid item xs={12} key={`ac-${accommodation.id}`}>
          <AccommodationCard accommodation={accommodation} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AccommodationList;
