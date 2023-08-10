"use client";

import React, {
	useState,
	useEffect,
} from "react";
import Card from "./Card";
import Link from "next/link";
const UserPage = ({ params }) => {
	var [greetings, setGreetings] =
		useState("");

	var data = [
		"Greetings, my friend! How's life treating you?",
		"Salutations! What's new in your world?",
		"Ahoy there! Long time no chat.",
		"Top of the morning to you! Ready for some conversation?",
		"Well met! What's the latest scoop?",
		"Hey you! How's everything on your end?",
		"Hola amigo! It's time for another catch-up.",
		"Hey sunshine! What's been keeping you busy?",
		"Yoohoo! Let's have a splendid chat, shall we?",
		"Hey, hey! Ready to dive into some discussions?",
	];

	useEffect(() => {
		if (data.length > 0) {
			const randomIndex =
				Math.floor(
					Math.random() *
						data.length
				);
			const randomGreeting =
				"Hi " +
				params.name +
				"! " +
				data[randomIndex];

			setGreetings(
				randomGreeting
			);
		}
	}, [data]);

	const info = [
		{ title: "Title 1" },
		{ title: "Title 2" },
		{ title: "Title 3" },
		{ title: "Title 4" },
		{ title: "Title 5" },
		{ title: "Title 6" },
		{ title: "Title 7" },
		{ title: "Title 8" },
		{ title: "Title 9" },
		{ title: "Title 10" },
	];

	return (
		<div>
			<div className="flex justify-center items-center">
				<div className="my-[50px]">
					<h1 className="text-white text-[34px] font-semibold font-poppins leading-[20px] ">
						{greetings}
					</h1>
				</div>
			</div>
			<div className="p-6">
				<div className="flex flex-wrap justify-evenly">
					{info.map(
						(
							item,
							index
						) => (
							<div
								key={
									index
								}
								className=""
							>
								<Link
									href={
										`${params.name}` +
										"/" +
										`${item.title}`
									}
								>
									<Card
										title={
											item.title
										}
										date=""
									/>
								</Link>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default UserPage;
