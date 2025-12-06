import React, { useState } from 'react';
import Button from '../../../componetns/Button';
import { useNavigate } from 'react-router-dom';

function EditInfo() {
  const [checked, setChecked] = useState(false);

  const [select, setSelect] = useState('');

  const navigate = useNavigate();

  const [addr, setAddr] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    pwd: '',
    pwd_ch: '',
    phone: '',
    addr: '',
    addr_sub: '',
    bigo: '',
  });

  // 공용 handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!checked) {
      alert('개인 정보 체크 동의해 주세요.');
      return;
    }

    // 비어 있는 항목 체크
    for (let key in form) {
      if (form[key].trim() === '') {
        const label = {
          name: '이름',
          email: '이메일',
          pwd: '비밀번호',
          pwd_ch: '비밀번호 확인',
          phone: '연락처',
          addr: '주소',
          addr_sub: '나머지 주소',
          bigo: '특이 사항',
        };

        alert(`${label[key]}를 입력해주세요.`);
        return; // 이동 막기
      }
    }

    alert('정보 수정 완료되었습니다.');
    navigate('/Mypage');
  };

  return (
    <>
      <div className="min-h-screen bg-light-01 myBg px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
        <div className="container flex flex-col items-center">
          <h4 className="tit w-[90%] my-4 mt-15 mx-auto + max-w-xl">
            <span className="material-icons">person</span>
            회원 정보 수정
          </h4>

          <div className="w-full flex flex-col items-center ">
            <div className="w-[90%] py-2 mx-auto + max-w-xl">
              <form className="w-full">
                {/* 이름 */}
                <div className="mb-4 w-full ">
                  <input
                    type="text"
                    name="name"
                    className="border border-main-01 p-2 w-full rounded bg-white focus:bg-white"
                    placeholder="이름"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 이메일 */}
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="email"
                    className="border border-main-01 p-2 w-full rounded bg-white focus:bg-white"
                    placeholder="이메일"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 비밀번호 */}
                <div className="mb-4 w-full">
                  <input
                    type="password"
                    name="pwd"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="비밀번호 변경"
                    value={form.pwd}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 비밀번호 확인 */}
                <div className="mb-4 w-full">
                  <input
                    type="password"
                    name="pwd_ch"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="비밀번호 변경 확인"
                    value={form.pwd_ch}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 성별 */}
                <div className="flex gap-4 mb-3">
                  <label
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSelect('option1')}
                  >
                    <input
                      type="radio"
                      name="gender"
                      className="hidden"
                      checked={select === 'option1'}
                      onChange={() => setSelect('option1')}
                    />
                    {select === 'option1' ? (
                      <span className="material-icons text-main-02">
                        radio_button_checked
                      </span>
                    ) : (
                      <span className="material-icons text-main-02">
                        radio_button_unchecked
                      </span>
                    )}
                    남
                  </label>

                  <label
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSelect('option2')}
                  >
                    <input
                      type="radio"
                      name="gender"
                      className="hidden"
                      checked={select === 'option2'}
                      onChange={() => setSelect('option2')}
                    />
                    {select === 'option2' ? (
                      <span className="material-icons text-main-02">
                        radio_button_checked
                      </span>
                    ) : (
                      <span className="material-icons text-main-02">
                        radio_button_unchecked
                      </span>
                    )}
                    여
                  </label>
                </div>
                {/* 연락처 */}
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="phone"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="연락처"
                    value={form.phone}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 주소 */}
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="addr"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="주소"
                    value={form.addr}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 나머지 주소 */}
                <div className="mb-4 w-full">
                  <input
                    type="text"
                    name="addr_sub"
                    className="border border-main-01 p-2 w-full rounded bg-white"
                    placeholder="나머지 주소"
                    value={form.addr_sub}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 특이 사항 */}
                <div className="mb-4 w-full">
                  <textarea
                    name="bigo"
                    className="border border-main-01 p-2 w-full h-24 rounded resize-none bg-white"
                    placeholder="특이 사항"
                    value={form.bigo}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'white',
                      WebkitBoxShadow: '0 0 0px 1000px white inset',
                    }}
                  />
                </div>
                {/* 체크박스 */}
                <div
                  onClick={() => setChecked(!checked)}
                  className="flex items-top gap-2 cursor-pointer select-none mb-6"
                >
                  <span className="material-icons text-main-02">
                    {checked ? 'check_box' : 'check_box_outline_blank'}
                  </span>

                  <span className="text-gray-mid !text-xs md:!text-base">
                    병원 예약을 위해 기본 개인정보를 수집·이용합니다. 예약 완료
                    후 관련 법령에 따라 보관 후 파기합니다.
                  </span>
                </div>
                {/* 버튼 */}
                <Button size="long" variant="primary" onClick={handleSubmit}>
                  정보수정
                </Button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditInfo;
