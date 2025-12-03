import React, { useEffect, useState } from "react";
import PageNatation from "../../../componetns/PageNatation";

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 더미 데이터 (병원 리스트)
  const hospitalData = [
    { id: 1, name: "윤치과 의원", rating: 4.4, addr: "서울시 구로구 구로동 구로디지털로32-58 가길 25 티엠타운빌딩 1층", tel: "010-1234-5678", review: 888, etc: "주차 가능 · 당일 예약 가능" },
    { id: 2, name: "이튼튼치과", rating: 4.8, addr: "서울시 강남구 역삼동 123-45", tel: "02-1234-5678", review: 1024, etc: "주말 진료 가능" },
    { id: 3, name: "서울미소치과", rating: 4.2, addr: "서울시 마포구 합정동 456-78", tel: "02-9876-5432", review: 567, etc: "주차 가능 · 야간 진료" },
    { id: 4, name: "행복한치과", rating: 4.6, addr: "서울시 송파구 잠실동 789-12", tel: "02-5555-1234", review: 432, etc: "당일 예약 가능" },
    { id: 5, name: "건강치과의원", rating: 4.0, addr: "서울시 영등포구 여의도동 321-65", tel: "02-3333-4444", review: 289, etc: "주차 가능" },
    { id: 6, name: "스마일치과", rating: 4.9, addr: "서울시 강서구 화곡동 111-22", tel: "02-7777-8888", review: 1567, etc: "주말 진료 가능 · 야간 진료" },
    { id: 7, name: "밝은미래치과", rating: 4.3, addr: "서울시 관악구 신림동 222-33", tel: "02-2222-3333", review: 678, etc: "주차 가능 · 당일 예약 가능" },
    { id: 8, name: "튼튼이치과", rating: 4.7, addr: "서울시 노원구 상계동 333-44", tel: "02-4444-5555", review: 890, etc: "주말 진료 가능" },
    { id: 9, name: "청담치과", rating: 4.5, addr: "서울시 강남구 청담동 444-55", tel: "02-6666-7777", review: 1234, etc: "야간 진료 · VIP 룸" },
    { id: 10, name: "연세치과", rating: 4.1, addr: "서울시 서대문구 연희동 555-66", tel: "02-8888-9999", review: 345, etc: "주차 가능" },
    { id: 11, name: "강남플러스치과", rating: 4.8, addr: "서울시 강남구 논현동 666-77", tel: "02-1111-2222", review: 2000, etc: "주말 진료 가능 · 주차 가능" },
    { id: 12, name: "서초예쁜이치과", rating: 4.4, addr: "서울시 서초구 서초동 777-88", tel: "02-3456-7890", review: 567, etc: "당일 예약 가능" },
  ];

  // 현재 페이지에 해당하는 데이터
  const totalPages = Math.ceil(hospitalData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = hospitalData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const swiper = new window.Swiper(".home-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <>
      {/* 메인 슬라이더 */}
      <div className="relative w-full myBg">
        <div className="swiper home-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-main-01 flex items-center justify-center">
                <span className="text-2xl md:text-4xl text-deep font-bold">
                  슬라이드 1
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-main-02 flex items-center justify-center">
                <span className="text-2xl md:text-4xl text-white font-bold">
                  슬라이드 2
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-light-01 flex items-center justify-center">
                <span className="text-2xl md:text-4xl text-deep font-bold">
                  슬라이드 3
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-point flex items-center justify-center">
                <span className="text-2xl md:text-4xl text-white font-bold">
                  슬라이드 4
                </span>
              </div>
            </div>
          </div>
          {/* 화살표 네비게이션 */}
          <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl"></div>
          <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl"></div>
        </div>
      </div>

      <div className="wrap">
        <div className="container">
          <h4 className="tit">
            <i className="fa-solid fa-crown"></i>
            릿치 랭킹 인기 병원
          </h4>

          <section className="sect1 w-full mt-3 mb-7">
            <div className="flex flex-row justify-between w-full gap-4">
              <div className="w-1/3 flex flex-col items-center justify-center rounded-[10px] overflow-hidden">
                <div className="w-full h-[150px] md:h-[300px] overflow-hidden rounded-[10px]">
                  <img
                    src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-2">이튼튼치과</span>
              </div>

              <div className="w-1/3 flex flex-col items-center justify-center rounded-[10px] overflow-hidden">
                <div className="w-full h-[150px] md:h-[300px] overflow-hidden rounded-[10px]">
                  <img
                    src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-2">이튼튼치과</span>
              </div>

              <div className="w-1/3 flex flex-col items-center justify-center rounded-[10px] overflow-hidden">
                <div className="w-full h-[150px] md:h-[300px] overflow-hidden rounded-[10px]">
                  <img
                    src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-2">이튼튼치과</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="sect2 mt-3 mb-7 myBg w-[96vw] lg:w-[100vw] bg-light-02">
        {/* 탭 버튼 */}
        <div className="flex">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex-1 py-3 text-center font-semibold transition-colors rounded-tl-[10px] rounded-tr-[10px] border border-white ${
              activeTab === 0
                ? "bg-main-02 text-white"
                : "bg-gray-light text-gray-deep hover:bg-main-01 hover:text-white"
            }`}
          >
            별점 높은 순
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex-1 py-3 text-center font-semibold transition-colors rounded-tl-[10px] rounded-tr-[10px] border border-white ${
              activeTab === 1
                ? "bg-main-02 text-white"
                : "bg-gray-light text-gray-deep hover:bg-main-01 hover:text-white"
            }`}
          >
            리뷰 많은 순
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`flex-1 py-3 text-center font-semibold transition-colors rounded-tl-[10px] rounded-tr-[10px] border border-white ${
              activeTab === 2
                ? "bg-main-02 text-white"
                : "bg-gray-light text-gray-deep hover:bg-main-01 hover:text-white"
            }`}
          >
            댓글 많은 순
          </button>
        </div>

        <div className="container">
          <h4 className="tit mt-8">
            <span className="material-icons">star</span>
            별점 높은 병원 순위
          </h4>

          {/* 탭 콘텐츠 */}
          <div className="py-6 flex flex-col gap-4">
            {activeTab === 0 && (
              <>
                {currentData.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="tab_cont text-center text-deep p-6 bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                  >
                    <div className="tab_cont_tit flex flex-row items-center">
                      <h4 className="tit mr-4">
                        <span className="material-icons">local_hospital</span>
                        {hospital.name}
                      </h4>

                      <div className="stars flex flex-row text-point items-center">
                        <span className="mr-1">{hospital.rating}</span>
                        <div className="flex flex-row text-point items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="material-icons">
                              {star <= Math.floor(hospital.rating)
                                ? "star"
                                : star - 0.5 <= hospital.rating
                                ? "star_half"
                                : "star_outline"}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="cardImg rounded-[10px] overflow-hidden mt-5">
                      <img
                        src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <ul className="cardList text-left mt-4">
                      <li className="flex items-start gap-[5px] mb-[5px]">
                        <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5 shrink-0 mt-[2px]">
                          <span
                            className="material-icons text-white"
                            style={{ fontSize: "14px" }}
                          >
                            location_on
                          </span>
                        </div>
                        <span className="dummy text-gray-deep">
                          {hospital.addr}
                        </span>
                      </li>
                      <li className="flex items-center gap-[5px] mb-[5px]">
                        <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5 shrink-0">
                          <span
                            className="material-icons text-white"
                            style={{ fontSize: "14px" }}
                          >
                            phone
                          </span>
                        </div>
                        <span className="dummy text-gray-deep">
                          {hospital.tel}
                        </span>
                      </li>
                      <li className="flex items-center gap-[5px] mb-[5px]">
                        <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5 shrink-0">
                          <span
                            className="material-icons text-white"
                            style={{ fontSize: "14px" }}
                          >
                            edit_calendar
                          </span>
                        </div>
                        <span className="dummy text-gray-deep">
                          진료 이용 후기 {hospital.review}건
                        </span>
                      </li>
                      <li className="flex items-center gap-[5px]">
                        <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5 shrink-0">
                          <span
                            className="material-icons text-white"
                            style={{ fontSize: "14px" }}
                          >
                            filter_vintage
                          </span>
                        </div>
                        <span className="dummy text-gray-deep">
                          {hospital.etc}
                        </span>
                      </li>
                    </ul>
                  </div>
                ))}
                <PageNatation
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
            {activeTab === 1 && (
              <div className="text-center text-deep p-6 bg-main-01 rounded-[4px]">
                탭 2 콘텐츠
              </div>
            )}
            {activeTab === 2 && (
              <div className="text-center text-white p-6 bg-main-02 rounded-[4px]">
                탭 3 콘텐츠
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
