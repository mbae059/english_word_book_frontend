import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          토익 영단어(고급)
        </Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어추가
        </Link>

        <Link to="/add_day" className="link">
          Day추가
        </Link>

        <Link to="/image" className="link">
          이미지 추가
        </Link>
      </div>
    </div>
  );
};

export default Header;
