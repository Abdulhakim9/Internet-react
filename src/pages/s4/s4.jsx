import React from 'react'
import { useTranslation } from 'react-i18next';

const S4 = () => {
     const { t, i18n } = useTranslation();
      function TranslateClick(lang) {
        i18n.changeLanguage(lang);
      }
  return (
    <div>
        <div className="flex justif-center  mt-[50px] justify-center gap-[140px]">
            <div className="">
                <p className="">{t("Example.140")}</p>
                <div className="">
                <p className="text-[20px]">{t("Example.141")}</p>
                    <p className="text-[red]">{t("Example.142")}</p>
                    <p className="text-[gray]">{t("Example.143")}</p>
                    <p className="text-[gray]">{t("Example.144")}</p>
                <p className="text-[20px]">{t("Example.145")}</p>
                    <p className="text-[gray]">{t("Example.146")}</p>
                    <p className="text-[gray]">{t("Example.147")}</p>
                <p className="text-[20px]">{t("Example.148")}</p>
                </div>
            </div>
            <div className="p-[20px] rounded-md mb-[70px]  border-[1px] border-[gray]">
                <p className="text-[red] text-[20px]">{t("Example.149")}</p>
                <div className="flex justify-center items-center gap-[15px] flex-col">
                    <div className="">
                        <input type="text" className='border-[1px] border-[gray] py-[10px] px-[15px] rounded-md w-[250px]' />
                        <input type="text" className='border-[1px] ml-[5px] border-[gray] py-[10px] px-[15px] rounded-md w-[250px]' />
                    </div>
                    <div className="">
                        <input type="text" className='border-[1px] border-[gray] py-[10px] px-[15px] rounded-md w-[250px]' />
                        <input type="text" className='border-[1px] ml-[5px] border-[gray] py-[10px] px-[15px] rounded-md w-[250px]' />
                    </div>
                </div>
                <p className="mt-[30px] text-[20px]">{t("Example.150")}</p>
                <div className="flex flex-col ">
                    <div className="">
                    <input type="text" className='border-[1px] border-[gray] py-[10px] px-[15px] rounded-md w-[510px]' />
                    </div>
                    <div className="mt-[10px]">
                    <input type="text" className='border-[1px] border-[gray] py-[10px] px-[15px] rounded-md w-[250px]' />
                    <input type="text" className='border-[1px] ml-[10px] border-[gray] py-[10px] px-[15px] rounded-md w-[250px]' />
                    </div>
                </div>
                <div className="">
                    <button className=' ml-[230px] mt-[40px] mr-[30px]'>Cancel</button>
                    <button className="text-[white] mv:ml-[50px] mt-[20px] mv:flex-wrap mb-[10px] text-center  mv:w-[290px] w-[200px] bg-[#DB4444] py-[12px] px-[20px]">
        {t("Example.151")}
      </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default S4