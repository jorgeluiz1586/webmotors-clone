import '../assets/css/style.css';
import { useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CarPage from "../pages/CarPage";
import SignInPage from "../pages/Auth/SignInPage";
import SignUpPage from "../pages/Auth/SignUpPage";

const WebMotorsLayout = () => {
  let [show, setShow] = useState(false)
  let menu = useRef(null)
  let barFirst = useRef(null)
  let barSecond = useRef(null)
  let barLast = useRef(null)

  let showMenu = () => {
    setShow(!show)
    if (show) {
      menu.current.classList.remove('menu')
      menu.current.classList.add('menu-active')
      barFirst.current.classList.remove('menu-button-bar-first')
      barFirst.current.classList.add('menu-button-bar-first-active')
      barSecond.current.classList.remove('menu-button-bar-second')
      barSecond.current.classList.add('menu-button-bar-second-active')
      barLast.current.classList.remove('menu-button-bar-last')
      barLast.current.classList.add('menu-button-bar-last-active')
    } else {
      menu.current.classList.add('menu')
      menu.current.classList.remove('menu-active')
      barFirst.current.classList.add('menu-button-bar-first')
      barFirst.current.classList.remove('menu-button-bar-first-active')
      barSecond.current.classList.add('menu-button-bar-second')
      barSecond.current.classList.remove('menu-button-bar-second-active')
      barLast.current.classList.add('menu-button-bar-last')
      barLast.current.classList.remove('menu-button-bar-last-active')
    }
  }

  return (
    <>
      <div className="webmotors-layout">
        <header className="main-header">
          <Link to="/">
            <img src="../assets/images/webmotors-logo.png" alt="" />
          </Link>
          <nav className="menu menu-animation" ref={menu}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cars">Cars</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </nav>
          <div class="menu-button-container" onClick={showMenu}>
            <div className="menu-button-bar menu-button-bar-first" ref={barFirst}></div>
            <div className="menu-button-bar menu-button-bar-second" ref={barSecond}></div>
            <div className="menu-button-bar menu-button-bar-last" ref={barLast}></div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  );
};

export default WebMotorsLayout;