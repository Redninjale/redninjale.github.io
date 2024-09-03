import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    if (!menuToggle) {
      document.querySelector("div.NavLContent").classList.add("menu");
    } else {
      document.querySelector("div.NavLContent").classList.remove("menu");
    }
    setMenuToggle(!menuToggle);
  }

  return (
    <div className="NavBar">
      <div className="NavList">
        {!menuToggle && (
          <span id="hContact">
            <a className="NavLink" href="#Contact">
              Contact
            </a>
          </span>
        )}
        <img
          id="menuIcon"
          onClick={toggleMenu}
          src={!menuToggle ? "menu.svg" : "cross.svg"}
          alt=""
          style={{
            width: !menuToggle ? 25 : 15,
            height: !menuToggle ? 25 : 15,
            top: !menuToggle ? 13 : 18.5,
            right: !menuToggle ? 40 : 45,
          }}
        />
        <div className="NavLContent">
          <span className="NavLItem">
            <a className="NavLink" href="#Home">
              Home
            </a>
          </span>
          <span className="NavLItem">
            <a className="NavLink" href="#Experience">
              Experience
            </a>
          </span>
          <span className="NavLItem">
            <a className="NavLink" href="#Projects">
              Projects
            </a>
          </span>
          <SocialRender color="black" />
        </div>
      </div>
    </div>
  );
}

function SocialRender({ color }) {
  return (
    <ul
      style={{
        display: "flex",
        height: "100%",
        listStyle: "none",
        alignItems: "center",
        backgroundColor: "var(--header-bg)",
        justifyContent: "center",
        gap: "10px",
      }}
      className="socials"
    >
      <li className="NavLItem">
        <a
          href="https://drive.google.com/file/d/13Aa0SC41LbkoF4_wKUVzIIRfLCZGOCQW/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="NavIcon"
            src="./resume.svg"
            type="image/svg"
            alt="Logo"
          />
        </a>
      </li>
      <li className="NavLItem">
        <a
          href="https://github.com/Redninjale"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="NavIcon"
            src="./github.svg"
            type="image/svg"
            alt="Logo"
          />
        </a>
      </li>
      <li className="NavLItem">
        <a
          href="https://www.linkedin.com/in/cameron-le-09430a24a/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="NavIcon"
            src="./linkedin.svg"
            type="image/svg"
            alt="Logo"
          />
        </a>
      </li>
      <li className="NavLItem">
        <img
          className="NavIcon email"
          onClick={() => email(color)}
          src="./email.svg"
          type="image/svg"
          alt="Logo"
        />
      </li>
    </ul>
  );
}

export function email(color) {
  var select =
    color === "black"
      ? ".NavIconList  li.NavLItem:nth-child(4)"
      : ".HomeIconList  li.NavLItem:nth-child(4)";
  // console.log(select);
  var element = document.querySelector(select);
  navigator.clipboard.writeText("le.ph.cameron@gmail.com").then(
    () => {
      element.classList += " clicked";
      setTimeout(() => element.classList.remove("clicked"), 1000);
    },
    () => {
      alert("Failed to Copy");
    }
  );
}

export default Header;
