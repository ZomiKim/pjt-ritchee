import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditInfo from './EditInfo';
import MedicalList from './MedicalList';
import ReviewHistory from './ReviewHistory';
import ReservationList from './ReservationList';
import ReviewForm from './ReviewForm';
import DentistReview from '../shared/DentistReview';
import { Link } from 'react-router-dom';

function Mypage() {
  return (
    <>
      <div>mypage</div>
      <div className="wrap !p-0 !m-0">
        <div className="container !p-0 !m-0">
          <div
            className="flex flex-col items-center justify-center text-white !p-0 !m-0 w-full"
            style={{
              backgroundImage:
                'url("https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/MyPageIMG.png")',

              backgroundSize: 'cover',

              width: '100%',
              height: '300px',
            }}
          >
            <span>김훈규님의 건강을 위한 공간입니다</span>
          </div>
        </div>
      </div>

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
