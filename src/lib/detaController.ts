import Data from "public/accommodation.json";
import { Accommodation } from "@/app/types";

const MAX_ACCOMMODATION_PER_PAGE = 10;
const accommodations: Accommodation[] = Data.accommodations;

export const getAccommodationsCount = (): number => accommodations.length;

export const getAllAccommodation = (): Accommodation[] => accommodations;

export const getAccommodationsByPage = (
  page: number,
): Promise<Accommodation[]> =>
  new Promise((resolve, reject) => {
    /* Insert delay to simulate communicating with the API */
    setTimeout(() => {
      let tmp = accommodations.slice(
        page * MAX_ACCOMMODATION_PER_PAGE,
        (page + 1) * MAX_ACCOMMODATION_PER_PAGE,
      );
      resolve(tmp);
    }, 500);
  });
