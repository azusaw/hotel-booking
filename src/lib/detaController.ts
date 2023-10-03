import Data from "public/accommodation.json";
import { Accommodation, AccommodationsRes, SearchCondition } from "@/app/types";

const MAX_ACCOMMODATION_PER_PAGE = 10;

const accommodations: Accommodation[] = Data.accommodations.sort(
  (a, b) => a.sort_order - b.sort_order,
);

export const getAccommodationsCount = (): number => accommodations.length;

export const getAllAccommodation = (): AccommodationsRes => {
  return {
    accommodations: accommodations,
    totalPage: Math.floor(accommodations.length / MAX_ACCOMMODATION_PER_PAGE),
  };
};

export const getAccommodationsByCondition = (
  page: number,
  searchCondition: SearchCondition,
): Promise<AccommodationsRes> =>
  new Promise((resolve, reject) => {
    /* Insert delay to simulate communicating with the API */
    setTimeout(() => {
      let filter: string[] = [];
      if (
        searchCondition.isHotel ||
        searchCondition.isApartment ||
        searchCondition.isGuestHouse
      ) {
        searchCondition.isHotel && filter.push("Hotel");
        searchCondition.isApartment && filter.push("Apartment");
        searchCondition.isGuestHouse && filter.push("Guest House");
      } else {
        /* No condition */
        filter = ["Hotel", "Apartment", "Guest House"];
      }
      let tmp = accommodations
        .filter((ac) => filter.includes(ac.type.name))
        .filter((ac) =>
          searchCondition.keyword == ""
            ? true
            : ac.name.includes(searchCondition.keyword),
        );
      resolve({
        accommodations: tmp.slice(
          page * MAX_ACCOMMODATION_PER_PAGE,
          (page + 1) * MAX_ACCOMMODATION_PER_PAGE,
        ),
        totalPage: Math.floor(tmp.length / MAX_ACCOMMODATION_PER_PAGE),
      });
    }, 500);
  });
