import React, { ChangeEvent, useContext } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import { SearchConditionContext } from "@/app/components/AccomodationSearch";

type Props = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ handleChange }: Props) => {
  const searchCondition = useContext(SearchConditionContext);
  return (
    <Box
      sx={{
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <Stack>
        <TextField label="Hotel name" />
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <h4>Filter by:</h4>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="isHotel"
                  checked={searchCondition.isHotel}
                  onChange={handleChange}
                  size="small"
                />
              }
              label="Hotels"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="isApartment"
                  checked={searchCondition.isApartment}
                  onChange={handleChange}
                  size="small"
                />
              }
              label="Apartments"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="isGuestHouse"
                  checked={searchCondition.isGuestHouse}
                  onChange={handleChange}
                  size="small"
                />
              }
              label="Guest House"
            />
          </FormGroup>
        </FormControl>
      </Stack>
    </Box>
  );
};
export default SearchBox;
