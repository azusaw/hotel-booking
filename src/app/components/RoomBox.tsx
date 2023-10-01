import { Accommodation, Room } from "@/app/types";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  room: Room;
}

const RoomBox = ({ room }: Props) => {
  const Facilities = room.facilities?.map((facility, idx) => (
    <>
      {facility.label == "Breakfast" ? (
        <div style={{ color: "green", fontWeight: "bold" }}>
          Breakfast included
        </div>
      ) : (
        facility.label + ", "
      )}
    </>
  ));

  return (
    <Box
      sx={{
        borderLeft: "3px solid #ddd",
        padding: "0 0.5rem",
        fontSize: "0.75rem",
      }}
    >
      <Grid container>
        <Grid item xs={9}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              lineHeight: 2,
            }}
          >
            {room.name}
          </Typography>
          {Facilities}
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "right" }}>
          {room.number_of_nights} nights, {room.max_occupancy} adults
          <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {room.price?.price}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
export default RoomBox;
