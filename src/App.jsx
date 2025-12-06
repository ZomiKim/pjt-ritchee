import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./componetns/Nav";
import Home from "./assets/page/home/Home";
import About from "./assets/page/about/About";
import DentList from "./assets/page/dentistlist/DentList";
import Mypage from "./assets/page/mypage/Mypage";
import Event from "./assets/page/event/Event";
import Member from "./assets/member/Member";
import Map from "./assets/page/shared/Map";
import Footer from "./componetns/footer";

function App() {
  const location = useLocation();

  // /member 경로에서는 Nav와 Footer 숨김
  const hideNavFooter = location.pathname.startsWith("/member");

  return (
    <>
      {!hideNavFooter && <Nav />}
      <div className={hideNavFooter ? "" : "wrap"}>
        <div className={hideNavFooter ? "" : "container"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/dentistList/*" element={<DentList />} />
            <Route path="/mypage/*" element={<Mypage />} />
            <Route path="/event/*" element={<Event />} />
            <Route path="/map/*" element={<Map />} />
            <Route path="/member/*" element={<Member />} />
          </Routes>
        </div>
      </div>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
