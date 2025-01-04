import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/Monitor-Cart-Small.png"
import img1 from "../../assets/Gamepad-Cart-Small.png"
import img2 from "../../assets/Frame 834.png"
const Chicken = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="mb-[120px]">
      <p className="text-[gray] ml-[180px] mt-[50px]">{t("Example.131")}</p>
      <p className="text-[35px] ml-[180px]">{t("Example.132")}</p>
      <div className="flex justify-center items-center gap-[220px]">
        <div className="flex flex-col gap-[20px] border-[1px] border-[gray] p-[25px] rounded-md">
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="First name"
          />
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="Last name"
          />
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="Street address"
          />
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="Apartment, floor, etc. (optional)"
          />
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="Town/City"
          />
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="Phone number"
          />
          <input
            type="text"
            className=" py-[10px] px-[15px] rounded-md border-[1px] border-[gray]"
            placeholder="Email s"
          />
          <div className="flex justify-center items-center mt-[10px] gap-[10px]">
            <input type="checkbox" checked className="" />
            <p className="mb-0 text-[black]">{t("Example.133")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] border-[1px] border-[gray] p-[15px] rounded-md">
            <div className="flex justify-center items-center gap-[115px]">
                <div className="flex items-center gap-[10px]">
                <img src={img1} alt="" />
                <p className="mb-0">{t("Example.134")}</p>
                </div>
                <p className="mb-0">$650</p>
            </div>
            <div className="flex justify-around items-center gap-[90px]">
            <div className="flex items-center gap-[10px]">
                <img src={img} alt="" />
                <p className="mb-0">{t("Example.135")}</p>
                </div>
                <p className="mb-0">$1100</p>
            </div>
            <div className="flex justify-center items-center gap-[180px]">
                <p className="">{t("Example.136")}</p>
                <p className="">{t("Example.137")}</p>
            </div>
            <div className="flex justify-center items-center gap-[220px]">
                <p className="">{t("Example.121")}</p>
                <p className="">$1750</p>
            </div>
            <div className="flex justify-around items-center gap-[50px]">
                <div className="flex items-center">
                    <input type="radio" />
                    <p className="mb-0 ml-[10px]">{t("Example.138")}</p>
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="flex items-center">
            <input type="radio" checked />
            <p className="mb-0 ml-[180px]">{t("Example.139")}</p>
            </div>
            <div className="">
                <input type="text" className=" px-[7px] border-[1px] border-[gray] py-[14px] rounded-md" placeholder="Coupon Code" />
                <button className="py-[15px] ml-[10px] px-[30px] border-[1px] border-[#DB4444] text-[#DB4444] rounded-md">Apply</button>
            </div>
            <button className="bg-[#DB4444] py-[12px] px-[30px] rounded-md text-[white] w-[200px]">Place Order</button>
        </div>
      </div>

    </div>
  );
};

export default Chicken;
