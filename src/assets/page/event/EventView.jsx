import React from "react";
import { useParams } from "react-router-dom";

function EventView() {
  const { id } = useParams();

  return (
    <>
      <div>이벤트 {id}번 상세 페이지</div>
    </>
  );
}

export default EventView;
