import { TripsContext } from "../context/TripsContext";
import { useContext } from "react";

export const useTripsContext = () => {
  const context = useContext(TripsContext);

  if (!context) {
    throw Error("useTripsContext必须在TripsContextProvider里");
  }
  return context;
};
