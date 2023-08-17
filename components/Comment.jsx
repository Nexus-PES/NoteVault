import { comments } from "../data";
import React from "react";
import Image from "next/image";
// import profile from "public/images/profile.png"
import star from "public/images/star.svg"
const Comment = () => {
  return (
    <>
    <h1 className="font-['Poppins'] font-[600] px-8 text-[2.16rem] ml-[6rem] mt-20 text-white">What Others Have To Say</h1>
      <div className="flex px-8 ml-[6rem]">
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
    </>
  );
};

const CommentCard = ({ ratings, imageUrl, name, comment }) => {
  return (
    <div className="mr-40 rounded-md hover:bg-[#292929]">
      <div className="flex mb-4">
      <Image src={imageUrl} alt="hy" width={500} height={500} className="h-[4rem] w-16 border-2 border-[#E40000] rounded-full mr-4 self-center"/>
      <h2 className="self-center mr-32">{name}</h2>
      <Image src={star} className="self-center mr-2"/>
      <p className="self-center">{ratings}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;