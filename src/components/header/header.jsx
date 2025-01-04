import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switcher from "../../switcher/switcher";
import img from "../../assets/Group 1116606595 (3).png";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-blue-200 gap-[30px] p-[7px] mv:gap-0 flex justify-center dark:bg-[yellow] dark:text-[black] items-center w-[100%]">
      <div className="flex items-center gap-0">
        <div className="">
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </div>
      </div>
      <div className="">
        <nav className="mv:hidden ">
          <ul
            className="flex justify-center items-center mb-[0px] p-[10px]"
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <li></li>
            <li>
              <Link to="/about">{t("Example.1")}</Link>
            </li>
            <li>
              <Link to="/history">{t("Example.2")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("Example.3")}</Link>
            </li>
            <li>
              <Link to="/menu">{t("Example.4")}</Link>
            </li>
            <li>
              <Link to="/chicken">{t("Example.5")}</Link>
            </li>
            <li>
              <Link to="/s4">{t("Example.96")}</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        
        <input
          type="text"
          className="text-[white] mv:hidden bg-[lightgray] border-[1px] border-[gray] rounded-md py-[10px] px-[20px]"
          placeholder="Search..."
          name=""
          id=""
        />
      </div>
      <div className="">
        <div className="flex gap-[20px]">
          <Switcher />
          <button
            className="p-[5px] border-[1px] border-[black] bg-[black] text-[white] rounded-md hover:bg-[lightgray] hover:text-[black]"
            onClick={() => TranslateClick("en")}
          >
            Eng
          </button>
          <button
            className="p-[5px] border-[1px] border-[black] bg-[black] text-[white] rounded-md hover:bg-[lightgray] hover:text-[black]"
            onClick={() => TranslateClick("ru")}
          >
            RUS
          </button>
          <button
            className="p-[5px] border-[1px] border-[black] bg-[black] text-[white] rounded-md hover:bg-[lightgray] hover:text-[black]"
            onClick={() => TranslateClick("tj")}
          >
            TJK
          </button>
        </div>
      </div>
      <Link to="/s1"><span className="mv:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </span></Link>
      <Link to="/s2"><span className="mv:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </span></Link>
      <Link to="/s3"><span className="mv:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </span></Link>
      <nav className="">
        <div className="flex justify-between items-center">
          <span className="block" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-4 absolute top-16 right-4 bg-white shadow-lg w-[200px] rounded-lg p-4 transition-all ease-in-out duration-300`}
        >
          <li>
            <Link to="/">{t("Example.1")}</Link>
          </li>
          <li>
            <Link to="/about">{t("Example.2")}</Link>
          </li>
          <li>
            <Link to="/history">{t("Example.3")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("Example.4")}</Link>
          </li>
          <li>
            <Link to="/menu">{t("Example.5")}</Link>
          </li>
          <li>
            <Link to="/chicken">Sign In</Link>
          </li>
          <li>
            <Link to="/s1">Progress</Link>
          </li>
          <li>
            <Link to="/s2">Information</Link>
          </li>
          <li>
            <Link to="/s3">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
