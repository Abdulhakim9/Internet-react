import { GoogleOutlined, GooglePlusOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";

const S3 = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return <div className="dark:bg-[black] dark:text-[white]">
    <p className="text-center mv:w-[350px] mv:m-auto pt-[130px] text-[38px] -ml-[90px]">{t("Example.55")}</p>
    <p className="text-[18px] mv:w-[350px] mv:m-auto -mt-[30px] text-[gray] pb-[10px] -ml-[250px] text-center">{t("Example.55")}</p>
    <div className="flex flex-col justify-center items-center gap-[10px] pb-[150px] ">
        <input className="py-[15px] mv:w-[350px] mv:m-auto px-[20px] border-[1px] border-[black] m-auto mt-[5px] w-[400px]" type="text" placeholder="Name" />
        <input className="py-[15px] mv:w-[350px] mv:m-auto px-[20px] border-[1px] border-[black] m-auto mt-[5px] w-[400px]" type="text" placeholder="Email or phone number" />
        <input className="py-[15px] mv:w-[350px] mv:m-auto px-[20px] border-[1px] border-[black] m-auto mt-[5px] w-[400px]" type="text" placeholder="Password" />
        <button className="py-[12px] mv:w-[350px] mv:m-auto px-[20px] hover:bg-[#DB3333] bg-[#DB4444] text-[white] m-auto mt-[5px] w-[400px]">{t("Example.56")}</button>
        <button className="py-[12px] mv:w-[350px] mv:m-auto px-[20px] border-[1px] dark:border-[white] hover:bg-[lightgray] border-[black] m-auto mt-[5px] w-[400px]"><GoogleOutlined /> {t("Example.57")}</button>
        <p className="text-[gray]">{t("Example.58")}</p>
    </div>
  </div>;
};

export default S3;
