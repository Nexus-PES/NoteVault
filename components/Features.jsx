import { features } from "../data";
import Image from "next/image";
import React from "react";
import iconic from "public/images/kybernetwork.svg";
const Features = () => {
  return (
    <>
      <div className="flex ml-[3.8rem]">
        {features.map((comment) => (
          <>
            <div
              className="flex  mb-[2rem] flex-[1]  "
              key={comment.id}
            >
              <div className="ml-[4rem] rounded-md hover:bg-[#292929]">
                <div className="flex gap-[0.5rem] ">
                  <span className="bg-[#E40000] text-[#E40000] w-1 h-6">.</span>
                  <Image src={iconic} alt="pichur" className="self-start" />
                  <h2 className=" self-start font-poppins  w-[14rem]">{comment.title}</h2>
                </div>
                <p className="text-[12px] ml-4 mt-[0.5rem] font-poppins">{comment.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Features;