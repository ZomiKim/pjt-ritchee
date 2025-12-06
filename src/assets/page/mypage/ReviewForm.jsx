import React, { useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import Button from "../../../componetns/Button";

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleStarClick = (clickedRating) => {
    if (rating === clickedRating) {
      // 같은 별을 다시 클릭하면 토글 (0으로 리셋)
      setRating(0);
    } else {
      setRating(clickedRating);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/mypage/medicalList");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("등록되었습니다");
    navigate("/mypage/medicalList");
  };
  return (
    <>
      <div className="min-h-screen bg-light-02 myBg  text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
        <div className="container  flex flex-col ">
          <div className="w-full md:max-w-2xl mx-auto">
            <h4 className="tit  my-1 mt-10 ">
              <span className="material-icons">edit_calendar</span>
              후기 작성 하기
            </h4>
          </div>

          <div className="w-full md:max-w-2xl mx-auto">
            <span className="tit  my-1 mt-5">
              <span className="material-icons">local_hospital</span>
              구로 이튼튼 치과
            </span>
          </div>
        </div>

        <div className="pl-1 my-5 text-gray-500 w-full md:max-w-3xl mx-auto">
          <div className="container">
            · &nbsp; 방문 일자 &nbsp;: 2025 - 11- 12
          </div>
        </div>

        <div className="container">
          <div className="w-full md:max-w-2xl mx-auto border border-main-01 p-5 md:p-5 rounded-[4px] mb-5 bg-white text-gray-200  ">
            <div className="pl-1 space-y-2 my-5 text-gray-500">
              <p className="tit  mt-3 ">
                <i className="fa-regular fa-solid fa-tooth  text-[12px]  p-1 rounded-full text-white bg-deep mb-0.5"></i>
                진료는 만족스러웠나요?
              </p>
            </div>

            <div className="flex flex-row text-point items-center justify-evenly w-full">
              {[1, 2, 3, 4, 5].map((starNum) => (
                <span
                  key={starNum}
                  className="material-icons !text-[clamp(30px,10vw,80px)] cursor-pointer"
                  onClick={() => handleStarClick(starNum)}
                >
                  {starNum <= rating ? "star" : "star_outline"}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:max-w-2xl mx-auto flex flex-row items-center">
            <div className="w-full rounded-[4px]">
              <form action="#" className="w-full">
                <div
                  className="
                              relative 
                              before:content-['\f5c9'] 
                              before:absolute 
                              before:left-5
                              before:top-1/2 
                              before:-translate-y-1/2 
                              before:text-[12px]
                              before:text-white
                              before:bg-deep
                              before:p-0.5
                              before:flex
                              before;items-center
                              before:justify-center
                              
                              before:rounded-full
                              before:w-[20px] 
                              before:h-[20px]
                              before:font-[FontAwesome]
                            "
                >
                  <input
                    type="text"
                    className="border border-main-01 p-6 pl-11 w-full rounded-[4px] bg-white placeholder-deep text-black text-base font-semibold"
                    placeholder="후기의 제목을 작성해주세요!"
                  />
                </div>

                <div
                  className="
    relative 
    before:content-['\f5c9'] 
    before:absolute 
    before:left-5
    before:top-11      
    before:text-[12px]
    before:text-white
    before:bg-deep
    before:p-0.5
    before:flex
    before:items-center   
    before:justify-center
    before:rounded-full
    before:w-[20px] 
    before:h-[20px]
    before:font-[FontAwesome]
  "
                >
                  <textarea
                    name="rev_cont"
                    id="rev_cont"
                    className="border border-main-01 p-2.5 pl-11 py-5.5 mt-5 w-full rounded-[4px] bg-white text-black text-base font-semibold h-[300px] placeholder-black resize-none"
                    placeholder="세세한 후기를 작성해주세요!"
                  />
                </div>

                <div className="pl-1 space-y-2 my-5 text-gray-500 border rounded-[4px] border-main-01 bg-white h-[80px] ">
                  <p className="tit  mt-2  p-5  ">
                    <i className="fa-regular fa-solid fa-camera  text-[12px]  p-1 rounded-full text-white bg-deep mb-0.5"></i>
                    사진을 첨부하시려면 클릭하세요!
                  </p>
                </div>

                <div className="flex justify-between w-full mb-20">
                  <Button size="mid" variant="primary" onClick={handleCancel}>
                    취소
                  </Button>
                  <Button size="mid" variant="primary" onClick={handleSubmit}>
                    등록
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewForm;
