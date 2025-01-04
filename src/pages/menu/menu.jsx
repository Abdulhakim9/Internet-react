import React from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/Monitor-Cart-Small.png"
import img1 from "../../assets/Gamepad-Cart-Small.png"
import img2 from "../../assets/icon-cancel.png"
const Menu = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <p className="ml-[90px] mt-[50px]">{t("Example.107")}</p>
      <table className="m-auto w-[1170px] mv:w-[350px]">
        <thead className="h-[60px]">
          <tr className="">
            <th className="text-start pl-[10px]">{t("Example.107")}</th>
            <th className="text-start">{t("Example.108")}</th>
            <th className="text-start">{t("Example.109")}</th>
            <th className="text-start ">{t("Example.110")}</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="h-[95px] shadow-[0px_0px_10px_0px] mb-[10px] shadow-[lightgray]">
            <td className="pl-[10px]">
              <div className="flex items-center gap-[20px]">
                <img src={img} alt="" />
                <p className="mb-0">{t("Example.111")}</p>
              </div>
            </td>
            <td>
              <p className="">$650</p>
            </td>
            <td>
              <input type="number" className="p-[10px] w-[55px] rounded-md border-[1px] border-[gray]" placeholder="01" />
            </td>
            <td>
              <p className="">$1100</p>
            </td>
            <td>
                <img src={img2} alt="" />
            </td>
          </tr>
          <tr  className="h-[95px] shadow-[0px_0px_20px_0px]  shadow-[lightgray]">
            <td className="pl-[10px]">
              <div className="flex items-center gap-[20px]">
                <img src={img1} alt="" />
                <p className="mb-0">{t("Example.112")}</p>
              </div>
            </td>
            <td className="">
              <p className="">$550</p>
            </td>
            <td>
              <input type="number" className="p-[10px] w-[55px] rounded-md border-[1px] border-[gray]" placeholder="02" />
            </td>
            <td><p className="">$1100</p></td>
            <td><img src={img2} alt="" /></td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-around items-center mv:gap-0 mb-[50px] gap-[510px] mt-[20px]">
        <div className="">
          <button className="py-[15px] px-[30px] border-[1px] border-[gray] rounded-md">Return To Shop</button>
        </div>
        <div className="mv:flex">
          <button className="py-[15px] px-[30px] border-[1px] border-[gray] rounded-md">Update Cart</button>
          <button className="py-[15px] ml-[10px] px-[30px] border-[1px] border-[#DB4444] text-[#DB4444] rounded-md">Remove all</button>
        </div>
      </div>
      <div className="flex justify-around mt-[100px] mv:gap-0 mv:flex-col gap-[70px] mb-[60px]">
        <div className="">
            <input type="text" className="py-[15px] mv:ml-[20px] px-[10px] rounded-md border-[1px] border-[gray] w-[350px]" placeholder="Coupon Code" />
            <button className="py-[15px] ml-[10px] mv:ml-[20px] mv:mt-[10px] mv:w-[350px] mv:m-auto px-[30px] border-[1px] border-[#DB4444] text-[#DB4444] rounded-md">Apply</button>
        </div>
        <div className="p-[20px] rounded-md border-[1px] mv:w-[350px] mv:m-auto mv:mt-[10px] border-[gray]">
            <p className="text-[20px]">Cart Total</p>
            <div className="flex items-center gap-[15px] flex-col ">
                <div className="flex gap-[300px] mv:gap-[240px] border-b-[1px] border-[gray] pb-[10px]">
                    <p className="">Subtotal</p>
                    <p className="">$1750</p>
                </div>
                <div className="flex gap-[310px] mv:gap-[250px] border-b-[1px] border-[gray] pb-[10px]">
                    <p className="">Shipping</p>
                    <p className="">Free</p>
                </div>
                <div className="flex gap-[322px] mv:gap-[240px] border-b-[1px] border-[gray] pb-[10px]">
                    <p className="">Total:</p>
                    <p className="">$1750</p>
                </div>
                <button className="py-[15px] ml-[10px] px-[30px] border-[1px] border-[#DB4444] bg-[#DB4444] text-[white] rounded-md">Procees to checkout</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
