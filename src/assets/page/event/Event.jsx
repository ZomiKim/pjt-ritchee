import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import EventView from './EventView';
import '../../../index.css';

function Event() {
  const [select, setSelect] = useState(null);

  const selectClick = (id) => {
    setSelect(id);
  };

  if (select) {
    return <EventView id={select} onBack={() => setSelect(null)} />;
  }

  return (
    <>
      <div>
        <div onClick={() => selectClick(1)}>
          <img
            src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/event1.png"
            alt="img"
            className="block sm:hidden w-screen -ml-[50vw] left-1/2 relative"
          />
          {/* <img
            src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/tevent1.jpg"
            alt="img"
            className="hidden sm:block lg:hidden w-screen -ml-[50vw] left-1/2 relative"
          /> */}
          <img
            src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pevent1.jpg"
            alt="img"
            className="hidden sm:block w-screen relative left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="container">
          <div className="flex items-center gap-[5px] mt-[30px] mb-5 md:my-10">
            <i className="fa-solid fa-tooth md:text-2xl lg:text-4xl xl:text-5xl text-deep"></i>
            <h4 className="font-Pretendard text-deep" style={{fontSize:"clamp(16px, 4vw, 48px)"}}>구로구 주민 이벤트</h4>
          </div>

          <p className="mb-[30px] font-Pretendard md:text-[100px]" style={{fontSize:"clamp(10px, 3vw, 36px)"}}>
            구로구 주민 여러분을 위한 특별 치과 이벤트! 건강한 치아, 밝은 미소를 위한 무료 검진 및 스케일링 혜택을
            만나보세요.<br />예약은 선착순! 지금 바로 신청하세요.
          </p>
        </div>

        <div className="flex flex-col">
          <div onClick={() => selectClick(2)}>
            <img
              src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/event2.png"
              alt="img"
              className="block sm:hidden myBg mb-5"
            />
            <img
              src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pevent2.jpg"
              alt="img"
              className="hidden sm:block myBg mb-10"
            />
          </div>

          <div onClick={() => selectClick(3)}>
            <img
              src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/event3.png"
              alt="img"
              className="block sm:hidden myBg mb-5"
            />

            <img
              src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pevent3.jpg"
              alt="img"
              className="hidden sm:block myBg mb-10"
            />
          </div>

          <div onClick={() => selectClick(4)}>
            <img
              src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/event4.png"
              alt="img"
              className="block sm:hidden myBg mb-5"
            />
            <img
              src="https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pevent4.jpg"
              alt="img"
              className="hidden sm:block myBg mb-10"
            />
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route path="eventview/:id" element={<EventView />} />
      </Routes> */}
    </>
  );
}

export default Event;
