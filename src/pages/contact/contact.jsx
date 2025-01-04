import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Frame 895.png";
import img2 from "../../assets/Frame 896.png";
import img3 from "../../assets/Frame 897.png";
import img4 from "../../assets/Frame 919.png";
import img5 from "../../assets/Frame 894.png";
import img10 from "../../assets/icon-delivery.png";
import img11 from "../../assets/Icon-return.png";
import img6 from "../../assets/Frame 922.png";
import img7 from "../../assets/Frame 918.png";
import img8 from "../../assets/Frame 916.png";
import img9 from "../../assets/Frame 963.png";
import Card from "../../components/card/card";
import img12 from "../../assets/Frame 570.png";
import img13 from "../../assets/Frame 570 (1).png";
import img14 from "../../assets/Frame 570 (2).png";
import img15 from "../../assets/Cart (11).png"
const Contact = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <p className="mt-[40px] mv:ml-8 ml-[120px]">{t("Example.87")}</p>
      <div className="flex justify-center mv:flex-wrap items-center gap-[20px] mt-[50px] mb-[30px]">
        <div className="flex justify-center mv:flex-col-reverse items-center gap-[20px]">
          <div className="flex flex-col mv:w-[350px] mv:f gap-[17px]">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="mv:w-[350px]">
          <p className="text-[35px]">{t("Example.88")}</p>
          <img src={img6} alt="" />
          <p className="text-[30px] mt-[15px]">$192.00</p>
          <p className="w-[400px] mv:w-[350px] text-[gray]">{t("Example.89")}</p>
          <img src={img7} alt="" />
          <div className="flex items-center gap-[10px]">
            <p className="mb-[0px]">{t("Example.90")}</p>
            <img src={img8} className="mt-[25px]" alt="" />
          </div>
          <img src={img9} className="mt-[25px]" alt="" />
          <div className="mt-[30px]">
            <div className="flex mb-[15px] justify-center items-center gap-[10px] rounded-md border-[1px] border-[gray]">
              <div className="">
                <img src={img10} alt="" />
              </div>
              <div className="mt-[10px]">
                <p className="">{t("Example.92")}</p>
                <p className="">{t("Example.93")}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[10px] rounded-md border-[1px] border-[gray]">
              <div className="">
                <img src={img11} alt="" />
              </div>
              <div className="mt-[10px]">
                <p className="">{t("Example.94")}</p>
                <p className="text-[gray]">{t("Example.95")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-[100px] ml-[50px] text-[red]">{t("Example.91")}</p>
      <div className="flex justify-center mv:ml-0 mv:w-[350px] mv:flex-wrap items-center gap-[30px] mt-[40px] mb-[80px]">
        <Card text={t("Example.35")} text1={t("Example.36")} img={img12} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img13} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img14} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img15} />
      </div>
    </div>
  );
};

export default Contact;
