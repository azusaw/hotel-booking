import React, { ChangeEvent, useContext, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchConditionContext } from "@/app/components/AccomodationSearch";

type Props = {
  handleFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeywordChange: (value: string) => void;
};

const SearchBox = ({ handleFilterChange, handleKeywordChange }: Props) => {
  const searchCondition = useContext(SearchConditionContext);
  const [keyword, setKeyword] = useState("");
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
        <Paper
          component="form"
          sx={{
            p: "4px",
            display: "flex",
            border: "2px solid #ddd",
          }}
          elevation={0}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Haotel name..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            onClick={(_e) => handleKeywordChange(keyword)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <h4>Filter by:</h4>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="isHotel"
                  checked={searchCondition.isHotel}
                  onChange={handleFilterChange}
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
                  onChange={handleFilterChange}
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
                  onChange={handleFilterChange}
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
