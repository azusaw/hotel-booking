"use client";

import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

const AccommodationDetail: NextPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <div style={{ color: "black" }}>Detail: {id}</div>;
};

export default AccommodationDetail;
