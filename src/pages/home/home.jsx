import React from "react";
import img from "../../assets/Frame 560.png";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Group 1000005937.png";
import img2 from "../../assets/Frame 570.png";
import img3 from "../../assets/Frame 570 (1).png";
import img4 from "../../assets/Frame 570 (2).png";
import img5 from "../../assets/Frame 570 (3).png";
import Card from "../../components/card/card";
import img6 from "../../assets/Category-CellPhone (1).png";
import img7 from "../../assets/Category-Computer.png";
import img8 from "../../assets/Category-SmartWatch.png";
import img9 from "../../assets/Category-Camera.png";
import img10 from "../../assets/Category-Headphone.png";
import img11 from "../../assets/Category-Gamepad.png";
import img12 from "../../assets/Cart.png";
import img13 from "../../assets/Cart (1).png";
import img14 from "../../assets/Cart (2).png";
import img15 from "../../assets/Cart (3).png";
import img16 from "../../assets/Frame 694.png";
import img17 from "../../assets/Frame 601.png"
import img18 from "../../assets/Cart (4).png"
import img19 from "../../assets/Cart (5).png"
import img20 from "../../assets/Cart (6).png"
import img21 from "../../assets/Cart(7).png"
import img22 from "../../assets/Cart (7).png"
import img23 from "../../assets/Cart (8).png"
import img24 from "../../assets/Cart (9).png"
import img25 from "../../assets/Cart (10).png"
import img26 from "../../assets/Frame 684.png"
import img27 from "../../assets/Frame 685.png"
import img28 from "../../assets/Frame 686.png"
import img29 from "../../assets/Frame 687.png"

const Home = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <div className="flex justify-center items-center mv:w-[350px] mv:m-auto mv:flex-wrap gap-[80px] mt-[30px] mb-[30px]">
        <div className="mv:mt-[20px] mv:-mb-[50px] mv:flex mv:w-[350px] mv:flex-wrap mv:m-auto mv:gap-[10px]">
          <p className="">{t("Example.24")}</p>
          <p className="">{t("Example.25")}</p>
          <p className="">{t("Example.26")}</p>
          <p className="">{t("Example.27")}</p>
          <p className="">{t("Example.28")}</p>
          <p className="">{t("Example.29")}</p>
          <p className="">{t("Example.30")}</p>
          <p className="">{t("Example.31")}</p>
          <p className="">{t("Example.32")}</p>
        </div>
        <div className="">
          <img src={img} alt="" />
        </div>
      </div>
      <p className="text-[red] text-[20px] mt-[100px] ml-[60px]">
        {t("Example.33")}
      </p>
      <div className="flex items-center mv:w-[350px] mv:flex-wrap mv:ml-[50px] gap-[70px] ml-[60px] mt-[20px]">
        <p className="text-[34px] -mb-[0px]">{t("Example.34")}</p>
        <img src={img1} alt="" />
      </div>
      <div className="flex justify-center mv:w-[350px] mv:flex-wrap mv:m-auto mv:mt-[20px] items-center gap-[20px] mt-[40px] mb-[30px]">
        <Card text={t("Example.35")} text1={t("Example.36")} img={img2} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img3} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img4} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img5} />
      </div>
      <button className="text-[white] ml-[580px] mv:ml-[50px] mt-[20px] mv:flex-wrap mb-[30px] text-center  mv:w-[290px] w-[200px] bg-[#DB4444] py-[10px] px-[20px]">
        {t("Example.37")}
      </button>
      <p className="text-[red] text-[20px] mv:w-[350px] mv:m-auto mv:mb-[20px] mv:mt-[100px] mt-[100px] ml-[90px]">
        {t("Example.38")}
      </p>
      <p className="text-[34px] ml-[90px] mv:w-[350px] mv:m-auto mt-[20px] mb-[20px]">
        {t("Example.39")}
      </p>
      <div className="flex justify-center mv:w-[370px] mv:m-auto mv:mt-[20px] mv:flex-wrap items-center gap-[30px] mb-[30px] mt-[30px]">
        <div className="flex justify-center flex-col w-[170px] items-center gap-[10px] border-[1px] border-[gray] p-[10px] rounded-md">
          <img src={img6} alt="" />
          <p className="">{t("Example.40")}</p>
        </div>
        <div className="flex justify-center flex-col w-[170px] items-center gap-[10px] border-[1px] border-[gray] p-[10px] rounded-md">
          <img src={img7} alt="" />
          <p className="">{t("Example.41")}</p>
        </div>
        <div className="flex justify-center flex-col w-[170px] items-center gap-[10px] border-[1px] border-[gray] p-[10px] rounded-md">
          <img src={img8} alt="" />
          <p className="">{t("Example.42")}</p>
        </div>
        <div className="flex justify-center w-[170px] bg-[#DB4444] text-[white] flex-col items-center gap-[10px] border-[1px] border-[gray] p-[10px] rounded-md">
          <img src={img9} alt="" />
          <p className="">{t("Example.43")}</p>
        </div>
        <div className="flex justify-center flex-col w-[170px] items-center gap-[10px] border-[1px] border-[gray] p-[10px] rounded-md">
          <img src={img10} alt="" />
          <p className="">{t("Example.44")}</p>
        </div>
        <div className="flex justify-center flex-col w-[170px] items-center gap-[10px] border-[1px] border-[gray] p-[10px] rounded-md">
          <img src={img11} alt="" />
          <p className="">{t("Example.45")}</p>
        </div>
      </div>
      <p className="text-[red] mv:w-[350px] mv:m-auto mv:mt-[100px] text-[20px] mt-[100px] ml-[90px]">
        {t("Example.46")}
      </p>
      <div className="flex items-center mv:w-[350px] mv:ml-[0px] mv:flex-col justify-center gap-[20px] -ml-[130px]">
        <p className="text-[34px] ml-[90px] mv:w-[350px] mt-[20px] mb-[20px]">
          {t("Example.47")}
        </p>
        <button className="text-[white] ml-[580px] mv:ml-[40px] mb-[30px] text-center  mv:w-[340px] w-[200px] bg-[#DB4444] py-[10px] px-[20px]">
          {t("Example.48")}
        </button>
      </div>
      <div className="flex justify-center mv:w-[350px] mv:m-auto mv:flex-wrap items-center gap-[20px] mt-[20px] mb-[30px]">
        <Card text={t("Example.35")} text1={t("Example.36")} img={img12} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img13} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img14} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img15} />
      </div>
      <div className="w-full pt-[30px] mv:w-[380px] mv:m-auto mv:flex-wrap mv:mt-[40px] mb-[40px] bg-[black] h-[450px] mv:h-[700px] flex justify-center items-center">
        <div className="mv:w-[380px] mv:m-auto mv:p-[20px] mv:flex-wrap">
          <p className="text-[#00FF66] text-[17px]">{t("Example.38")}</p>
          <p className="text-[50px] mv:text-[36px] mv:w-[350px] text-[white] w-[550px]">{t("Example.49")}</p>
          <img src={img17} alt="" />
          <button className="text-[black] mt-[40px] mb-[30px] text-center  mv:w-[340px] w-[200px] bg-[#00FF66] py-[15px] px-[20px]">
            {t("Example.50")}
          </button>
        </div>
        <div className="">
          <img src={img16} className="" alt="" />
        </div>
      </div>
      <p className="text-[red] text-[20px] mt-[100px] ml-[90px]">
        {t("Example.51")}
      </p>
      <p className="text-[34px] ml-[90px] mt-[20px] mb-[20px]">
        {t("Example.52")}
      </p>
      <div className="flex justify-center items-center gap-[20px] mb-[30px] flex-wrap mt-[30px]">
      <Card text={t("Example.35")} text1={t("Example.36")} img={img18} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img19} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img20} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img21} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img22} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img23} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img24} />
      <Card text={t("Example.35")} text1={t("Example.36")} img={img25} />
      </div>
      <button className="text-[white] ml-[580px] mb-[0px] mv:ml-[50px] mv:w-[300px] text-center w-[200px] bg-[#DB4444] py-[10px] px-[20px]">
        {t("Example.37")}
      </button>
      <p className="text-[red] text-[20px] mt-[100px] ml-[90px]">
        {t("Example.53")}
      </p>
      <p className="text-[34px] ml-[90px] mt-[20px] mb-[30px]">
        {t("Example.54")}
      </p>
      <div className="flex justify-center mv:w-[350px] mv:m-auto mv:flex-wrap items-center gap-[20px] mb-[40px]">
        <div className="">
            <img src={img26} alt="" />
        </div>
        <div className="flex flex-col gap-[30px]">
            <div className="">
                <img src={img27} alt="" />
            </div>
            <div className="flex items-center gap-[30px] mv:w-[350px] mv:m-auto mv:flex-wrap mv:mb-[20px]">
                <img src={img28} className="mv:w-[350px] mv:m-auto mv:flex-wrap" alt="" />
                <img src={img29} className="mv:w-[350px] mv:m-auto mv:flex-wrap" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
