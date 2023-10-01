"use client";

import { NextPage } from "next";
import styles from "./page.module.css";
import Data from "public/accommodation.json";
import { Accommodation } from "@/app/types";
import { createTheme, ThemeProvider } from "@mui/material";
import AccommodationList from "@/app/components/AccommodationList";

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
  const accommodations: Accommodation[] = Data.accommodations;

  return (
    <ThemeProvider theme={customTheme}>
      <main className={styles.main}>
        <AccommodationList accommodations={accommodations} />
      </main>
    </ThemeProvider>
  );
};

export default Home;
