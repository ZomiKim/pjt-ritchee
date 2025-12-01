import React from "react";
import { Route, Routes } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import ReservationCheck from "./ReservationCheck";

function Map() {
  return (
    <>
      <div>Map</div>

      <Routes>
        <Route path="reservationForm" element={<ReservationForm />} />
        <Route path="reservationForm/reservationCheck" element={<ReservationCheck />} />
      </Routes>
    </>
  );
}

export default Map;
