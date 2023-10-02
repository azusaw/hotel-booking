"use client";

import { NextPage } from "next";
import styles from "./page.module.css";

import { Accommodation } from "@/app/types";
import {
  Box,
  CircularProgress,
  createTheme,
  Pagination,
  Stack,
  ThemeProvider,
} from "@mui/material";
import AccommodationList from "@/app/components/AccommodationList";
import {
  getAccommodationsByPage,
  getAccommodationsCount,
} from "@/lib/detaController";
import React, { useEffect, useState } from "react";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#FF8989",
      dark: "#FF6666",
    },
    secondary: {
      main: "#FFC26F",
    },
  },
});

const Home: NextPage = () => {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMaxPage(Math.floor(getAccommodationsCount() / 10));
    (async () => {
      setIsLoading(true);
      const accommodations = await getAccommodationsByPage(page);
      setAccommodations(accommodations);
      setIsLoading(false);
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const accommodations = await getAccommodationsByPage(page);
      setAccommodations(accommodations);
      setIsLoading(false);
    })();
  }, [page]);

  return (
    <ThemeProvider theme={customTheme}>
      <main className={styles.main}>
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          <AccommodationList accommodations={accommodations} />
          <Pagination
            count={maxPage}
            variant="outlined"
            color="primary"
            shape="rounded"
            onChange={(_e, page) => setPage(page - 1)}
            sx={{ m: 2 }}
          />
        </Stack>
        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </main>
    </ThemeProvider>
  );
};

export default Home;
