import { NextPage } from "next";
import styles from "./page.module.css";
import Data from "public/accommodation.json";
import AccommodationCard from "@/app/components/AccommodationCard";
import { Accommodation } from "@/app/types";

const Home: NextPage = () => {
  const accommodations: Accommodation[] = Data.accommodations;

  return (
    <main className={styles.main}>
      <ul>
        {accommodations.map((accommodation) => (
          <AccommodationCard accommodation={accommodation} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
