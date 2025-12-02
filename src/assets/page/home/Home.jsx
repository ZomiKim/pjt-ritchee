import React, { useEffect } from "react";

function Home() {
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
            <span className="material-icons">star_outline</span>
            타이틀 테스트
          </h4>

          <section className="sect1 w-full mt-3">
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
    </>
  );
}

export default Home;
