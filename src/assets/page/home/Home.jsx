import React, { useEffect, useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState(0);

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
          <div className="py-6">
            {activeTab === 0 && (
              <div className="tab_cont text-center text-deep p-6 bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                <div className="tab_cont_tit flex flex-row items-center">
                  <h4 className="tit mr-4">
                    <span className="material-icons">local_hospital</span>
                    윤치과 의원
                  </h4>

                  <div className="stars flex flex-row text-point items-center">
                    <span className="mr-1">4.4</span>
                    <div className="flex flex-row text-point items-center">
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star_outline</span>
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
                      서울시 구로구 구로동 구로디지털로32-58 가길 25
                      티엠타운빌딩 1층 505호
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
                    <span className="dummy text-gray-deep">010-1234-5678</span>
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
                      진료 이용 후기 888건
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
                      주차 가능 · 당일 예약 가능 · 주말 진료 가능
                    </span>
                  </li>
                </ul>
              </div>
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
