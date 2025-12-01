import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-deep text-white py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col md:justify-between gap-4">
          {/* 로고 */}
          <Link
            to="/"
            className="text-2xl font-bold text-main-01 hover:text-main-02 transition-colors duration-300"
          >
            LOGO
          </Link>

          {/* 설명 */}
          <p className="text-white text-xs" style={{ fontWeight: 100 }}>
            COPYRIGHTⓒ 2025.jumeogdajim. fist fight. INC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
