import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/Side Image (1).png"
import img1 from "../../assets/Services (7).png"
import img2 from "../../assets/Services (8).png"
import img3 from "../../assets/Services (9).png"
import img4 from "../../assets/Services (10).png"
import img5 from "../../assets/Frame 874 (1).png"
import img6 from "../../assets/Frame 875 (1).png"
import img7 from "../../assets/Frame 876 (1).png"
import img8 from "../../assets/Services (11).png"
import img9 from "../../assets/Services (12).png"
import img10 from "../../assets/Services (13).png"
const S2 = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <p className="text-[17px] ml-[120px] mv:mt-[20px] mt-[50px] mv:mb-[30px] mv:ml-[30px]">{t("Example.97")}</p>
      <div className="flex justify-center items-center gap-[50px]  mv:w-[350px] mv:m-auto mv:flex-wrap">
        <div className="">
          <p className="text-[50px] mv:text-[40px] mv:m-auto mv:ml-[100px]">{t("Example.98")}</p>
          <p className="text-[black] mv:w-[350px] mv:m-auto font-sans leading-6 w-[500px]">{t("Example.99")}</p>
          <p className="text-[black] font-sans leading-6  mv:w-[350px] mv:m-auto w-[500px]">{t("Example.100")}</p>
        </div>
        <div className="">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex justify-center mv:flex-wrap mv:w-[370px] mv:gap-2 mv:m-auto items-center gap-[50px] mt-[70px]">
        <div className="flex flex-col rounded-md w-[180px] justify-center items-center gap-[15px]  p-[10px] border-[1px] border-[gray] mt-[50px]">
            <div className="">
               <img src={img1} alt="" /> 
            </div>
            <div className="">
                <p className="">10.5K</p>
            </div>
        </div>
        <div className="flex flex-col rounded-md w-[180px] bg-[#DB4444] text-[white] justify-center items-center gap-[15px]  p-[10px] border-[1px] border-[gray] mt-[50px]">
            <div className="">
               <img src={img2} alt="" /> 
            </div>
            <div className="">
                <p className="">33K</p>
            </div>
        </div>
        <div className="flex flex-col rounded-md w-[180px] justify-center items-center gap-[15px]  p-[10px] border-[1px] border-[gray] mt-[50px]">
            <div className="">
               <img src={img3} alt="" /> 
            </div>
            <div className="">
                <p className="">45.5K</p>
            </div>
        </div>
        <div className="flex flex-col rounded-md w-[180px] justify-center items-center gap-[15px]  p-[10px] border-[1px] border-[gray] mt-[50px]">
            <div className="">
               <img src={img4} alt="" /> 
            </div>
            <div className="">
                <p className="">25K</p>
            </div>
        </div>
      </div>
      <div className="flex justify-center mv:w-[350px] mv:flex-wrap mv:m-auto mv:mt-[50px] items-center mt-[50px] gap-[20px]">
        <div className="">
            <img src={img5} alt="" />
            <p className="text-[28px]  flex flex-col justify-center items-center gap-[5px]  p-[10px] border-[1px] border-[gray] mt-[50px]]">{t("Example.101")}</p>
        </div>
        <div className="">
            <img src={img6} alt="" />
            <p className="text-[28px] flex flex-col justify-center items-center gap-[5px]  p-[10px] border-[1px] border-[gray] mt-[50px]]">{t("Example.102")}</p>
        </div>
        <div className="">
            <img src={img7} alt="" />
            <p className="text-[28px]  flex flex-col justify-center items-center gap-[5px]  p-[10px] border-[1px] border-[gray] mt-[50px]]">{t("Example.103")}</p>
        </div>
      </div>
      <div className="flex justify-center mv:gap-[10px] mv:w-[350px] mv:flex-wrap mv:m-auto items-center mt-[60px] mb-[60px] gap-[50px]">
        <div className="flex flex-col items-center justify-center gap-[5px] border-[1px] rounded-md p-[10px]">
            <img src={img8} alt="" />
            <p className="">{t("Example.104")}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px] border-[1px] rounded-md p-[10px]">
            <img src={img9} alt="" />
            <p className="">{t("Example.105")}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px] border-[1px] rounded-md p-[10px]">
            <img src={img10} alt="" />
            <p className="">{t("Example.106")}</p>
        </div>
      </div>
    </div>
  );
};

export default S2;
