import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            HONDA ÔTÔ ĐẮK LẮK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-3 " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="./following"
                  role="button"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item"  to="./following/civicr">
                      Honda Civic Type R
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item"  to="./following/accord">
                      Honda Accrod
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="./following/civic">
                      Honda Civic
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="./following/crv">
                      Honda Crv
                    </Link>
                  </li>
                  
                  <li>
                    <Link className="dropdown-item" to="./following/hrv">
                      Honda Hrv
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="./following/city">
                      Honda City
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Liên Hệ</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
