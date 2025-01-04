import React from "react";
import img1 from "../../assets/Frame 566.png"
const Card = ({img,text,text1}) => {
  return (
    <div>
      <div className="flex flex-col gap-[5px] border-[1px] p-[10px] border-[gray] w-[290px]">
        <div className="">
            <img src={img} alt="" />
        </div>
        <div className="">
        <p className="">{text}</p>
        <p className="">{text1}</p>
        <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
