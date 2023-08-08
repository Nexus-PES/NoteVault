import Hero from "@/components/Hero";
import React from "react";


import { features } from "@/data";
import Comment from "@/components/Comment";

console.log(features);

const Home = () => {
	return (
		<div className="min-h-screen text-text-100 bg-background">
			<Hero />

			{/* Features */}
			{features.map((comment) => (
				<Comment
					title={comment.title}
					key={comment.title}
					desc={comment.description}
				/>
			))}

			{/* Comments */}

			{/* FAQ */}
		</div>
	);
};

export default Home;
