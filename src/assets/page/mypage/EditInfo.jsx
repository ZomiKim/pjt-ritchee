import React, { useState } from 'react';
import Button from '../../../componetns/Button';

function EditInfo() {
  const [checked, setChecked] = useState(false);

  const [select, setSelect] = useState('');

  return (
    <>
      <div className="min-h-screen bg-light-01 myBg px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
        <div className="container  flex flex-col items-center">
          <h4 className="tit w-[90%] my-4 mt-15 ">
            <span className="material-icons">person</span>
            회원 정보 수정
          </h4>

          <div className="w-full flex flex-col items-center ">
            <div className="w-[90%]  py-2">
              <form action="#" className="w-full">
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-main-01 p-2 w-full rounded bg-white "
                    placeholder="이름"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="이메일"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="비밀번호 변경"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="password"
                    name="pwd_ch"
                    id="pwd_ch"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="비밀번호 변경 확인"
                    required
                  />
                </div>

                <div className="flex gap-4 mb-3">
                  <label
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSelect('option1')}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={select === 'option1'}
                      onChange={() => setSelect('option1')}
                      className="hidden"
                    />
                    {/* 아이콘 변경 */}
                    {select === 'option1' ? (
                      <span className="material-icons text-main-02">
                        radio_button_checked
                      </span>
                    ) : (
                      <span className="material-icons text-gray-mid">
                        radio_button_unchecked
                      </span>
                    )}
                    남
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={select === 'option2'}
                      onChange={() => setSelect('option2')}
                      className="hidden"
                    />
                    {select === 'option2' ? (
                      <span className="material-icons text-main-02">
                        radio_button_checked
                      </span>
                    ) : (
                      <span className="material-icons text-gray-mid">
                        radio_button_unchecked
                      </span>
                    )}
                    여
                  </label>
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="연락처"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="addr"
                    id="addr"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="주소"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="addr_sub"
                    id="addr_sub"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="나머지 주소"
                    required
                  />
                </div>

                <div className="mb-4 w-full">
                  <textarea
                    name="bigo"
                    id="bigo"
                    className="border border-main-01 p-2 w-full h-24 rounded resize-none bg-white"
                    placeholder="특이 사항"
                  ></textarea>
                </div>

                {/* 체크박스 */}
                <div
                  onClick={() => setChecked(!checked)}
                  className="flex items-top gap-2 cursor-pointer select-none mb-6 "
                >
                  <span className="material-icons  text-main-02  mt-0.5">
                    {checked ? 'check_box' : 'check_box_outline_blank'}
                  </span>

                  {/* <span className="text-gray-800">
                  {checked ? '체크됨' : '체크 안됨'}
                </span> */}
                  <span className="text-gray-mid">
                    병원 예약을 위해 기본 개인정보를 수집·이용합니다. 예약 완료
                    후 관련 법령에 따라 보관 후 파기합니다.
                  </span>
                </div>

                <Button size="long" variant="primary">
                  정보수정
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditInfo;
