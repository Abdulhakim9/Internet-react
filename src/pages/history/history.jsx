import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/card/card";
import img13 from "../../assets/Cart (1).png";
import img14 from "../../assets/Cart (2).png";
import img24 from "../../assets/Cart (9).png"
import img25 from "../../assets/Cart (10).png"
import img20 from "../../assets/Cart (6).png"
import img15 from "../../assets/Cart (3).png";
import img21 from "../../assets/Cart (1).png";
import img22 from "../../assets/Cart (2).png";
const History = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <div className="flex mv:gap-0 mb-[1px] justify-around gap-[800px] items-center mt-[40px] ">
        <p className="mb-[0px]">Wishlist (4)</p>
        <button className="py-[12px] px-[40px] border-[1px] border-[gray] rounded-md">
          Move All To Bag
        </button>
      </div>
      <div className="flex justify-center items-center gap-[20px] flex-wrap mt-[40px] mb-[50px]">
        <Card text={t("Example.35")} text1={t("Example.36")} img={img13} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img14} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img24} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img25} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img20} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img15} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img21} />
        <Card text={t("Example.35")} text1={t("Example.36")} img={img22} />
      </div>
    </div>
  );
};

export default History;
