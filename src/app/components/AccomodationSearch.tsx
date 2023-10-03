import React, { createContext, useEffect, useState } from "react";
import { Accommodation, SearchCondition } from "@/app/types";
import { getAccommodationsByCondition } from "@/lib/detaController";
import {
  Backdrop,
  CircularProgress,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import SearchBox from "@/app/components/SearchBox";
import AccommodationList from "@/app/components/AccommodationList";

export const SearchConditionContext = createContext<SearchCondition>({
  isHotel: false,
  isApartment: false,
  isGuestHouse: false,
  keyword: "",
});

const AccommodationSearch = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCondition, setSearchCondition] = useState<SearchCondition>({
    isHotel: false,
    isApartment: false,
    isGuestHouse: false,
    keyword: "",
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCondition({
      ...searchCondition,
      [event.target.name]: event.target.checked,
    });
  };

  const handleKeywordChange = (value: string) => {
    setSearchCondition({
      ...searchCondition,
      keyword: value,
    });
  };

  const getAccommodations = async () => {
    setIsLoading(true);
    const res = await getAccommodationsByCondition(page, searchCondition);
    setAccommodations(res.accommodations);
    setTotalPage(res.totalPage);
    setIsLoading(false);
  };

  useEffect(() => {
    void getAccommodations();
  }, [page]);

  useEffect(() => {
    /* Reset page number or reload accommodations */
    page != 0 ? setPage(0) : void getAccommodations();
  }, [searchCondition]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SearchConditionContext.Provider value={searchCondition}>
            <SearchBox
              handleFilterChange={handleFilterChange}
              handleKeywordChange={handleKeywordChange}
            />
          </SearchConditionContext.Provider>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack sx={{ display: "flex", alignItems: "center" }}>
            <AccommodationList accommodations={accommodations} />
            <Pagination
              count={totalPage + 1}
              variant="outlined"
              color="primary"
              shape="rounded"
              onChange={(_e, page) => setPage(page - 1)}
              sx={{ m: 2 }}
            />
            {`${page + 1} / ${totalPage + 1}`}
          </Stack>
        </Grid>
      </Grid>
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};

export default AccommodationSearch;
