import { comments } from "../data";
import React from "react";
import Image from "next/image";

import star from "public/images/star.svg";
const Comment = () => {
	return (
		<div>
			<div className="font-poppins grid grid-col-1 mb-8 sm:mb-12 md:mb-14">
				<div className="font-poppins font-semibold text-clamp-subheading">
					What <span className="text-primary">others</span> have to say?
				</div>
			</div>
			<div className="flex gap-4 flex-col sm:flex-row">
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
		<div className="rounded-md p-4 hover:bg-dark-100 flex-1 font-poppins border-stone-800 border min-w-[300px]">
			<div className="flex justify-between items-center gap-x-2 gap-y-4">
					<Image
						src={imageUrl}
						alt="profile picture"
						width={44}
						height={44}
						className="h-12 w-12 border-white border-[1px] rounded-full flex-wrap"
					/>
					<h2 className="text-sm grow-1 flex-grow capitalize">{name}</h2>
				<div className="flex gap-x-1">
					<Image
						src={star}
						className=""
						alt="star"
						height={16}
						width={16}
					/>
					<p className="text-xs">{ratings}</p>
				</div>
			</div>
			<p className="py-3 text-xs">{comment}</p>
		</div>
	);
};

export default Comment;
