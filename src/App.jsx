import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './componetns/Nav';
import Footer from './componetns/Footer';
import Home from './assets/page/home/Home';
import About from './assets/page/about/About';
import DentList from './assets/page/dentistlist/DentList';
import Mypage from './assets/page/mypage/Mypage';
import Event from './assets/page/event/Event';
import Member from './assets/member/Member';
import { DentProvider } from './context/DentContext';
import Map from './assets/page/shared/Map';
import CalendarComp from './assets/page/shared/CalendarComp';

function App() {
  return (
    <>
      <Nav />
      <div className="wrap">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route
              path="/dentistList/*"
              element={
                /* 병원 api 없어서 임시로 dentprovider 걸어놓음 */
                <DentProvider>
                  <DentList />
                </DentProvider>
              }
            />
            <Route path="/mypage/*" element={<Mypage />} />
            <Route path="/test/*" element={<CalendarComp />} />
            <Route path="/event/*" element={<Event />} />
            <Route
              path="/map/*"
              element={
                <DentProvider>
                  <Map />
                </DentProvider>
              }
            />
            <Route path="/member/*" element={<Member />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
