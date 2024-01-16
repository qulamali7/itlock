import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header id="header">
        <div className="header_container">
          <div className="header_area">
            <div className="header_top">
              <p>
                Now Hiring:
                <span>
                  Are you a driven and motivated 1st Line IT Support Engineer?
                </span>
              </p>
              <div className="header_icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
            <div className="main_header">
              <div className="header_logo">
                <Link to="/">
                  <img
                    src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp"
                    alt=""
                  />
                </Link>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add">Add</Link>
                  </li>
                  <li>
                    <Link to={"/basket"}>Basket</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="header_call">
                <button>Free Quote</button>
                <div className="header_call_content">
                  <img
                    src="https://preview.colorlib.com/theme/itlock/assets/img/icon/headphones.svg"
                    alt=""
                  />
                  <div className="header_call_content_right">
                    <span>Have any Question?</span>
                    <p>Call: 10 (78) 837 3647</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
