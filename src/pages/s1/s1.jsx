import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../../assets/icons-phone (1).png"
import img1 from "../../assets/icons-mail (1).png"
const S1 = () => {
    const { t, i18n } = useTranslation();
      function TranslateClick(lang) {
        i18n.changeLanguage(lang);
      }
  return (
    <div>
        <p className="ml-[130px] mt-[50px]">{t("Example.130")}</p>
        <div className="flex justify-center items-center mb-[80px] mv:flex-wrap mv:w-[350px] mv:m-auto  mt-[30px] gap-[50px]">
        <div className="w-[320px] border-[1px] border-[gray] p-[10px]  rounded-xl">
            <div className="border-b-[1px] border-[gray] pb-[30px]">
                <div className="flex mb-[10px] items-center">
                    <img src={img} alt="" />
                    <p className="mb-0 ml-[10px]">{t("Example.123")}</p>
                </div>
                <p className="">{t("Example.124")}</p>
                <p className="">{t("Example.125")}</p>
            </div>
            <div className="mt-[30px]">
                <div className="mb-[10px] flex items-center">
                    <img src={img1} alt="" />
                    <p className="mb-0 ml-[10px]">{t("Example.126")}</p>
                </div>
                <p className="w-[320px]">{t("Example.127")}</p>
                <p className="">{t("Example.128")}</p>
                <p className="">{t("Example.129")}</p>
            </div>
        </div>
        <div className="p-[20px] rounded-xl mv:w-[350px] mv:flex mv:flex-col mv:gap-[10px] border-[1px] border-[gray]">
            <div className="mv:flex mv:flex-col mv:gap-[10px]">
                <input type="text" className='py-[12px] mv:w-[310px] rounded-md px-[15px] border-[1px] border-[gray]' placeholder='Name' />
                <input type="text" className='py-[12px] mv:w-[310px] rounded-md px-[15px] border-[1px] border-[gray]' placeholder='Email' />
                <input type="text" className='py-[12px] mv:w-[310px] rounded-md px-[15px] border-[1px] border-[gray]' placeholder='Phone' />
            </div>
            <div className="">
                <textarea name="" className='w-[680px] mv:w-[310px] mv:m-auto  mt-[10px] h-[270px] border-[1px] border-[gray]' id=""></textarea>
            </div>
        </div>
        </div>
    </div>
  )
}

export default S1