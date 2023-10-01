import { Accommodation } from "@/app/types";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import RoomBox from "@/app/components/RoomBox";
import React from "react";

interface Props {
  accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: Props) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "row",
      maxWidth: "800px",
      padding: "20px 15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      position: "relative",
    }}
    elevation={0}
  >
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        {accommodation.images.length > 0 ? (
          <CardMedia
            component="img"
            sx={{
              maxWidth: "250px",
              maxHeight: "250px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            image={accommodation.images[0].filename}
            alt={accommodation.images[0].alt}
          />
        ) : (
          <CardMedia
            sx={{
              width: "250px",
              backgroundColor: "whitesmoke",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Image
          </CardMedia>
        )}
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={11} sx={{ color: "primary.main" }}>
            <h3 style={{ display: "inline" }}>{accommodation.name}</h3>
            <Rating
              defaultValue={Number(accommodation.rating.id)}
              emptyIcon={<></>}
              precision={0.5}
              size="small"
              readOnly
              sx={{ ml: 1 }}
            />
          </Grid>
          <Grid item xs={1}>
            <Box
              sx={{
                p: "3px",
                color: "white",
                backgroundColor: "primary.dark",
                borderRadius: "5px 5px 5px 0",
                textAlign: "center",
              }}
            >
              {accommodation.rating.label}
            </Box>
          </Grid>
        </Grid>
        <Stack sx={{ fontSize: "0.85rem" }} direction="row" spacing={1}>
          <span>{accommodation.country.name}</span>
          <span>{accommodation.resort.name}</span>
        </Stack>
        <Stack sx={{ fontSize: "0.9rem", marginTop: "1rem" }} spacing={2}>
          {accommodation.rooms.map((room) => (
            <RoomBox key={`room-${room.id}`} room={room} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          sx={{
            textTransform: "none",
            color: "white",
            float: "right",
          }}
        >
          See availability
        </Button>
      </Grid>
    </Grid>
  </Card>
);

export default AccommodationCard;
