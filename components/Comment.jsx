import { comments } from "../data";
import React from "react";
import Image from "next/image";

import star from "public/images/star.svg";
const Comment = () => {
  return (
    <div className=" mb-8 sm:mb-12 md:mb-14">
      <h1 className="font-poppins font-semibold text-clamp-subheading text-white">
        What <span className="text-primary">Others</span> Have To Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 ">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            ratings={comment.ratings}
            imageUrl={comment.imageUrl}
            name={comment.name}
            comment={comment.comment}
          />
        ))}
      </div>
    </div>
  );
};

const CommentCard = ({ ratings, imageUrl, name, comment }) => {
  return (
    <div className=" rounded-md hover:bg-[#292929] p-4  border border-slate-200">
      <div className="flex justify-between items-center  ">
        <div className="flex gap-x-1">
          <Image
            src={imageUrl}
            alt="profile-pic"
            width={500}
            height={500}
            className="h-[4rem] w-16 border-2 border-[#E40000] rounded-full "
          />
          <h2 className="">{name}</h2>
        </div>
        <div className="flex gap-x-1">
          <Image
            src={star}
            className=""
            alt="star"
            height={22}
            width={22}
          />
          <p className="">{ratings}</p>
        </div>
      </div>
      <p className="py-3">{comment}</p>
    </div>
  );
};

export default Comment;
