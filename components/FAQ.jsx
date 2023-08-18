"use client";
import React, { useState } from "react";
import { faq } from "../data";
import add from "public/images/add.svg";
import Image from "next/image";

const FAQ = () => {
  const [rotateEle, setrotateEle] = useState(false);
  const handleRotate = () => setrotateEle(!rotateEle);
  const translate = rotateEle ? "h-[10rem] w-[1024px]" : "w-[1024px] p-[20px]";
  const rotate = rotateEle ? "rotate(-45deg)" : "rotate(0)";

  return (
    <>
      <div className="px-8 mb-[4rem] mt-20">
        <h1 className="font-['Poppins'] font-[600]  text-[2.16rem] text-white">
          No Rush to Believe in Us
        </h1>
        <p className="text-[#CECECE] ">
          If you still feel something is bothering you, feel free to check the
          Frequently Asked Questions
        </p>
      </div>
      <div className="flex  px-7">
        <div className="flex  w-[1040px] p-[20px] rounded-lg bg-[#292929]">
          {faq.map((question) => (
            <>
              <div className="flex flex-col">
                <h1 key={question.id} className="text-[16px] font-poppins">
                  {question.title}
                </h1>
                <div className="">
                  {rotateEle && (
                    <p className="font-poppins text-[12px] text-[#CECECE] mt-8">
                      {question.desc}
                    </p>
                  )}
                </div>
              </div>
            </>
          ))}
          <div className="flex justify-end  ml-24">
            <Image
              src={add}
              style={{
                transform: translate,
                transform: rotate,
                transition: "all 0.2s linear ",
                position: "absolute",
              }}
              height={30}
              onClick={handleRotate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;