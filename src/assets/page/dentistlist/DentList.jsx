import React from "react";
import { Route, Routes } from "react-router-dom";
import DentistView from "../shared/DentistView";
import Map from "../shared/Map";
import DentistReview from "../shared/DentistReview";

function DentList() {
  return (
    <>
      <div>DentList</div>

      <Routes>
        <Route path="dentistView" element={<DentistView />} />
        <Route path="dentistView/dentistReview" element={<DentistReview />} />
      </Routes>
    </>
  );
}

export default DentList;
