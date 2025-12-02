import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './componetns/Nav';
import Home from './assets/page/home/Home';
import About from './assets/page/about/About';
import DentList from './assets/page/dentistlist/DentList';
import Mypage from './assets/page/mypage/Mypage';
import Event from './assets/page/event/Event';
import Map from './assets/page/shared/Map';
import Member from './assets/member/Member';
import ReservationForm from './assets/page/shared/ReservationForm';

function App() {
  return (
    <>
      <Nav />
      <div className="wrap">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/dentistList/*" element={<DentList />} />
            <Route path="/test/*" element={<ReservationForm />} />
            <Route path="/mypage/*" element={<Mypage />} />
            <Route path="/event/*" element={<Event />} />
            <Route path="/map/*" element={<Map />} />
            <Route path="/member/*" element={<Member />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
