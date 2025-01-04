import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../../assets/Send Mail.png"
import img1 from "../../assets/Frame 741 (1).png"
const Footer = () => {
     const { t, i18n } = useTranslation();
      function TranslateClick(lang) {
        i18n.changeLanguage(lang);
      }
  return (
    <div>
        <div className="w-full bg-[black] h-[350px] border-t-[1px] border-[white] pt-[80px] flex justify-center gap-[50px] mv:w-[380px] mv:h-[140vh] mv:m-auto  mv:flex-wrap">
            <div className="mv:-ml-[50px]">
                <p className="text-[lightgray] text-[24px]">{t("Example.6")}</p>
                <p className="text-[lightgray] text-[18px]">{t("Example.7")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.8")}</p>
                <img src={img} alt="" />
            </div>
            <div className="">
                <p className="text-[lightgray] text-[24px]">{t("Example.9")}</p>
                <p className="text-[lightgray] text-[16px] w-[250px]">{t("Example.10")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.11")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.12")}</p>
            </div>
            <div className="">
                <p className="text-[lightgray] text-[24px]">{t("Example.13")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.14")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.15")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.16")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.17")}</p>
            </div>
            <div className="">
                <p className="text-[lightgray] text-[24px]">{t("Example.18")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.19")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.20")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.21")}</p>
                <p className="text-[lightgray] text-[16px]">{t("Example.22")}</p>
            </div>
            <div className="mv:-ml-[80px]">
                <p className="text-[lightgray] text-[24px]">{t("Example.23")}</p>
                <img src={img1} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer