import React from 'react';
import MapPage from './MapPage';
import { Route, Routes } from 'react-router-dom';
import ReservationCheck from './ReservationCheck';
import ReservationForm from './ReservationForm';

const Map = () => {
  return (
    <>
      <Routes>
        <Route index element={<MapPage />} />
        <Route path="/" element={<MapPage />} />
        <Route path="/reservationForm" element={<ReservationForm />} />
        <Route path="/reservationForm/reservationCheck" element={<ReservationCheck />} />
      </Routes>
    </>
  );
};

export default Map;
