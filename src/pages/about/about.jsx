import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/card/card";
import img2 from "../../assets/Frame 570.png";
import img3 from "../../assets/Frame 570 (1).png";
import img4 from "../../assets/Frame 570 (2).png";
import img18 from "../../assets/Cart (4).png";
import img19 from "../../assets/Cart (5).png";
import img20 from "../../assets/Cart (6).png";
import img21 from "../../assets/Cart(7).png";
import img22 from "../../assets/Cart (7).png";
import img23 from "../../assets/Cart (8).png";
import img24 from "../../assets/Cart (9).png";
import img25 from "../../assets/Cart (10).png";
const About = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <div className="">
        <div className="flex justify-around mv:-mt-[500px]  mv:flex-wrap items-center gap-[500px] mt-[50px] mb-[30px]">
          <p className="">{t("Example.59")}</p>
          <select
            name=""
            id=""
            className="border-[1px] border-[gray] py-[10px] px-[20px] rounded-md"
          >
            <option value="">Populary</option>
            <option value="">Comunnication</option>
            <option value="">Invadetion</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mv:-ml-[50px] mv:flex-wrap items-center ">
        <div className="border-r-[1px] mv:border-hidden border-[gray] pr-[80px]">
          <div className="mb-[120px]">
            <p className="text-[22px]">{t("Example.60")}</p>
            <p className="text-[25px]">{t("Example.61")}</p>
            <p className="text-[gray]">{t("Example.62")}</p>
            <p className="text-[gray]">{t("Example.63")}</p>
            <p className="text-[gray]">{t("Example.64")}</p>
            <p className="text-[gray]">{t("Example.65")}</p>
            <p className="text-[red]">{t("Example.66")}</p>
          </div>
          <div className="mb-[120px]">
            <p className="text-[25px]">{t("Example.67")}</p>
            <p className="text-[gray]">{t("Example.68")}</p>
            <p className="text-[gray]">{t("Example.69")}</p>
            <p className="text-[gray]">{t("Example.70")}</p>
            <p className="text-[gray]">{t("Example.71")}</p>
            <p className="text-[gray]">{t("Example.72")}</p>
            <p className="text-[red]">{t("Example.73")}</p>
          </div>
          <div className="mb-[120px]">
            <p className="text-[25px]">{t("Example.74")}</p>
            <p className="text-[gray]">{t("Example.75")}</p>
            <p className="text-[gray]">{t("Example.76")}</p>
            <p className="text-[gray]">{t("Example.77")}</p>
            <p className="text-[gray]">{t("Example.78")}</p>
            <p className="text-[gray]">{t("Example.79")}</p>
            <p className="text-[red]">{t("Example.66")}</p>
          </div>
          <div className="">
            <p className="text-[25px]">{t("Example.80")}</p>
            <p className="text-[gray]">{t("Example.81")}</p>
            <p className="text-[gray]">{t("Example.82")}</p>
            <p className="text-[gray]">{t("Example.83")}</p>
            <p className="text-[gray]">{t("Example.84")}</p>
          </div>
        </div>
        <div className="w-[930px]  pl-[30px]">
          <div className="flex justify-center items-center gap-[10px] flex-wrap">
            <Card text={t("Example.35")} text1={t("Example.36")} img={img18} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img19} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img20} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img22} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img23} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img24} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img21} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img25} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img4} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img20} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img2} />
            <Card text={t("Example.35")} text1={t("Example.36")} img={img3} />
          </div>
          <button className="text-[white] ml-[340px] mv:ml-[50px] mt-[20px] mv:flex-wrap mb-[30px] text-center  mv:w-[290px] w-[200px] bg-[#DB4444] py-[10px] px-[20px]">
            {t("Example.86")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
