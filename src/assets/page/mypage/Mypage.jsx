import React from "react";
import { Route, Routes } from "react-router-dom";
import EditInfo from "./EditInfo";
import MedicalList from "./MedicalList";
import ReviewHistory from "./ReviewHistory";
import ReservationList from "./ReservationList";
import ReviewForm from "./ReviewForm";
import DentistReview from "../shared/DentistReview";

function Mypage() {
  return (
    <>
      <div>mypage</div>
      {/* Inserted because of img url */}
      <img
        src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/MyPageIMG.png"
        alt="img"
      />

      <Routes>
        <Route path="editInformation" element={<EditInfo />} />
        <Route path="medicalList" element={<MedicalList />} />
        <Route path="medicalList/reviewForm/:id" element={<ReviewForm />} />
        <Route path="reviewHistory" element={<ReviewHistory />} />
        <Route
          path="reviewHistory/dentistReview/:id"
          element={<DentistReview />}
        />
        <Route path="reservationList" element={<ReservationList />} />
      </Routes>
    </>
  );
}

export default Mypage;
