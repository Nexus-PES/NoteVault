import { features } from "@/data";
import Image from "next/image";
import React from "react";
import iconic from "public/images/kybernetwork.svg";
const Features = () => {
  return (
    <>
    <div className="flex gap-4">
      {features.map((comment) => (
        <>

        <div className="flex mt-0 m-[8rem]  gap-4 w-8  " key={comment.id}>
       
          
          <span className="bg-[#E40000] text-[#E40000] w-5 h-5">.</span>
          <Image src={iconic} width={25} height={25} alt="pichur" />
          <h2 className="bg-red-400">{comment.title}</h2>
          {/* <p>{comment.description}</p>   */}
        </div>
        
        </>
      ))}
      </div>
  </>
  );
};

export default Features;

