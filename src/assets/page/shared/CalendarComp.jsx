import moment from 'moment';
import React, { useState } from 'react';

// 요일 이름
const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
// 2025~2026 대한민국 공휴일 (한글 이름만)
const holidays = [
  // 2025년
  { date: '2025-01-01', name: '신정' },
  { date: '2025-01-28', name: '설날 연휴' },
  { date: '2025-01-29', name: '설날' },
  { date: '2025-01-30', name: '설날 연휴' },
  { date: '2025-03-01', name: '삼일절' },
  { date: '2025-03-03', name: '삼일절 대체공휴일' },
  { date: '2025-05-05', name: '어린이날 / 부처님오신날' },
  { date: '2025-05-06', name: '대체공휴일' },
  { date: '2025-06-06', name: '현충일' },
  { date: '2025-08-15', name: '광복절' },
  { date: '2025-10-03', name: '개천절' },
  { date: '2025-10-05', name: '추석 연휴' },
  { date: '2025-10-06', name: '추석' },
  { date: '2025-10-07', name: '추석 연휴' },
  { date: '2025-10-08', name: '추석 대체공휴일' },
  { date: '2025-10-09', name: '한글날' },
  { date: '2025-12-25', name: '성탄절' },

  // 2026년
  { date: '2026-01-01', name: '신정' },
  { date: '2026-02-16', name: '설날 연휴' },
  { date: '2026-02-17', name: '설날' },
  { date: '2026-02-18', name: '설날 연휴' },
  { date: '2026-03-01', name: '삼일절' },
  { date: '2026-03-02', name: '삼일절 대체공휴일' },
  { date: '2026-05-05', name: '어린이날 / 부처님오신날' },
  { date: '2026-05-25', name: '부처님오신날 대체공휴일' },
  { date: '2026-06-06', name: '현충일' },
  { date: '2026-08-15', name: '광복절' },
  { date: '2026-08-17', name: '광복절 대체공휴일' },
  { date: '2026-09-24', name: '추석 연휴' },
  { date: '2026-09-25', name: '추석' },
  { date: '2026-09-26', name: '추석 연휴' },
  { date: '2026-10-03', name: '개천절' },
  { date: '2026-10-05', name: '개천절 대체공휴일' },
  { date: '2026-10-09', name: '한글날' },
  { date: '2026-12-25', name: '성탄절' },
];

const CalendarComp = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 보여줄 달
  const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 한 달의 날짜 배열 생성
  const getMonthDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay(); // 첫 요일
    const lastDate = new Date(year, month + 1, 0).getDate(); // 마지막 날짜
    const days = [];

    // 이전 달 공백
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // 이번 달 날짜
    for (let i = 1; i <= lastDate; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const days = getMonthDays(year, month);

  // 이전/다음 달 이동
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 오늘 날짜
  const today = new Date();

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          {'<'}
        </button>
        <div className="font-bold text-lg">
          {year} - {month + 1}
        </div>
        <button onClick={nextMonth} className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">
          {'>'}
        </button>
      </div>

      {/* 요일 */}
      <div className="grid grid-cols-7 text-center font-semibold mb-2">
        {WEEK_DAYS.map((day) => {
          return <div key={day}>{day}</div>;
        })}
      </div>

      {/* 날짜 */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, idx) => {
          if (!date) return <div key={idx}></div>;

          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

          const isSelected =
            selectedDate &&
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();

          const dayOfWeek = date.getDay(); // 0:일, 6:토
          const dateStr = moment(date).format('YYYY-MM-DD');
          const isHoliday = holidays.some((h) => h.date === dateStr);

          // 텍스트 색상 결정
          let textColor = '';
          if (dayOfWeek === 6) textColor = 'text-blue-500'; // 토요일은 파랑
          else if (dayOfWeek === 0 || isHoliday) textColor = 'text-red-500'; // 일요일 또는 공휴일 빨강

          return (
            <div
              key={idx}
              className={`h-10 flex items-center justify-center rounded cursor-pointer
                ${date ? 'hover:border border-main-01' : ''}
                ${isToday ? 'border border-blue-500' : ''}
                ${isSelected ? 'bg-blue-500 text-white' : ''}
                ${textColor}
              `}
              onClick={() => date && setSelectedDate(date)}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-end hover:opacity-90">
        <button className="text-white bg-main-02 px-4 p-2 rounded-2xl cursor-pointer">완료</button>
      </div> */}
    </div>
  );
};

export default CalendarComp;
