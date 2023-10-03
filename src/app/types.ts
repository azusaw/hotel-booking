export interface AccommodationsRes {
  accommodations: Accommodation[];
  totalPage: number;
}

export interface SearchCondition {
  isHotel: boolean;
  isApartment: boolean;
  isGuestHouse: boolean;
  keyword: string;
}

export interface Availability {
  id: number;
  available: number;
  total: number;
}

export interface Accommodation {
  id: number;
  sort_order: number;
  name: string;
  type: Type;
  description: string;
  address_1: string;
  address_2: string;
  address_3: string;
  postcode: string;
  country: Country;
  resort: Resort;
  location: Location;
  images: Image[];
  rating: Rating;
  facilities: Facility[];
  rooms: Room[];
}

export interface Type {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
}

export interface Resort {
  id: number;
  name: string;
}

export interface Location {
  id: number;
  location_long: number;
  location_lat: number;
  name: string;
}

export interface Image {
  alt: string;
  title: string;
  filename: string;
}

export interface Rating {
  id: number;
  label: string;
}

export interface Facility {
  id: number;
  label: string;
}

export interface Price {
  value: number;
  currency_id: number;
  currency_iso_code: string;
  currency_exponent: number;
  price: string;
}

export interface Room {
  id: number;
  sort_order: number;
  type_id: number;
  max_occupancy: number;
  min_occupancy: number;
  number_of_nights: number;
  type: string;
  name: string;
  facilities?: Facility[];
  price?: Price;
}
