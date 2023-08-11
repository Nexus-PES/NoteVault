import { comments } from "@/data";
import React from "react";

const Comment = () => {
  return (
    <>
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
