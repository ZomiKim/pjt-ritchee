import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from '../../../componetns/Button';
import '../../../index.css';

function EventView({ id, onBack }) {
  // const { id } = useParams();

  const eventDetail = {
    1: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail1.jpg',
    2: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail2.jpg',
    3: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail3.jpg',
    4: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail4.jpg',
    5: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/tdetail1.jpg',
  };

  const viewEvent = eventDetail[id];

  const [isSmall, setIsSmall] = useState(window.innerWidth <= 500);

  const peventDetail = {
    1: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail1.jpg',
    2: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail2.jpg',
    3: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail3.jpg',
    4: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail4.jpg',
    5: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/tdetail1.jpg',
  };

  const viewpEvent = peventDetail[id];

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full wrap myBg !mt-0">
      {/* ★ 수정: width에 따라 이미지 자동 변경 */}
      <img
        src={isSmall ? viewEvent : viewpEvent} // ★ 핵심 부분
        alt={`event${id}`}
        className="block"
      />

      <div className="w-[50%] py-10">
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            onBack();
          }}
          className="my-5 py-3 text-center font-pretendard"
          size="long"
          variant="primary"
          style={{ fontWeight: '600' }}
        >
          이벤트 목록
        </Button>
      </div>
    </div>
  );
}

export default EventView;
