"use client";

import React from "react";
import { NextPage } from "next";
import styles from "./page.module.css";
import { createTheme, ThemeProvider } from "@mui/material";
import AccommodationSearch from "@/app/components/AccomodationSearch";

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

const Home: NextPage = () => (
  <ThemeProvider theme={customTheme}>
    <main className={styles.main}>
      <AccommodationSearch />
    </main>
  </ThemeProvider>
);

export default Home;
