import { comments } from "@/data";
import React from "react";
import Image from "next/image";
import profile from "public/images/profile.png"
import star from "public/images/star.svg"
const Comment = () => {
  return (
    <>
    <h1 className="font-['Poppins'] font-[600]  text-[2.16rem] ml-[4rem]">What Others Have To Say</h1>
    <Image src={profile} className="h-[4rem] w-16 border-2 ml-16 border-[#E40000] rounded-full"/>
    <Image src={star}/>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          ratings={comment.ratings}
          imageUrl={comment.imageUrl}
          name={comment.name}
          comment={comment.comment}
        />
        
      ))}
    </>
  );
};

const CommentCard = ({ ratings, imageUrl, name, comment }) => {
  return (
    <div>
      <p>{ratings}</p>
      <p>{imageUrl}</p>
      <h2>{name}</h2>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;