import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../componetns/Button';

function EventView({ id, onBack }) {
  // const { id } = useParams();

  const eventDetail = {
    1: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail1.png',
    2: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail2.png',
    3: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail3.png',
    4: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/detail4.png',
  };

  const viewEvent = eventDetail[id];

  const peventDetail = {
    1: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail1.jpg',
    2: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail2.png',
    3: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail3.png',
    4: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/pdetail4.png',
  };

  const viewpEvent = peventDetail[id];

  return (
    <>
      <div>
        {/* <h2>이벤트 상세 페이지 #{id}</h2> */}
        <img src={viewEvent} alt={`event${id}`} className="block md:hidden myBg" />
        <img src={viewpEvent} alt={`pevent${id}`} className="hidden md:block myBg" />

        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            onBack();
          }}
          className="my-5 py-3 text-center"
          size="long"
          variant="primary"
          style={{ fontWeight: '600' }}
        >
          목록으로
        </Button>
      </div>
    </>
  );
}

export default EventView;
