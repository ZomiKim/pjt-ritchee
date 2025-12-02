import React, { useState } from 'react';
import Button from '../../../componetns/Button';

function EditInfo() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div>
        <h4 className="tit py-10">
          <span className="material-icons">person</span>
          회원 정보 수정
        </h4>

        <div className="w-full flex flex-col items-center">
          <div className="w-[90%] flex flex-col flex-wrap items-center justify-center py-10">
            <form action="#" className="w-full">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="이름"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="이메일"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="비밀번호 변경"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  type="password"
                  name="pwd_ch"
                  id="pwd_ch"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="비밀번호 변경 확인"
                  required
                />
              </div>

              <div className="flex gap-4 mb-3">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="male" />남
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" />여
                </label>
              </div>

              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="연락처"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="addr"
                  id="addr"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="주소"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  type="text"
                  name="addr_sub"
                  id="addr_sub"
                  className="border border-main-01 p-2 w-full rounded"
                  placeholder="나머지 주소"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <textarea
                  name="bigo"
                  id="bigo"
                  className="border border-main-01 p-2 w-full h-24 rounded resize-none"
                  placeholder="특이 사항"
                ></textarea>
              </div>

              {/* 체크박스 */}
              <div
                onClick={() => setChecked(!checked)}
                className="flex items-top gap-2 cursor-pointer select-none mb-6"
              >
                <span className="material-icons  text-main-02  mt-0.5">
                  {checked ? 'check_box' : 'check_box_outline_blank'}
                </span>

                {/* <span className="text-gray-800">
                  {checked ? '체크됨' : '체크 안됨'}
                </span> */}
                <span className="text-gray-mid">
                  병원 예약을 위해 기본 개인정보를 수집·이용합니다. 예약 완료 후
                  관련 법령에 따라 보관 후 파기합니다.
                </span>
              </div>

              <Button size="long" variant="primary">
                정보수정
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditInfo;
