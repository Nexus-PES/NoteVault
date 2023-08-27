"use client";

import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import Link from "next/link";
import { notesData } from "../../../data";
import SideMenu from "../../../components/Sidebar";

import Image from "next/image";

const UserPage = ({ params }) => {
	const username = params.name;

	const [greetings, setGreetings] = useState("");
	const [info, setInfo] = useState(notesData);
	const [input, setInput] = useState("");

	const [div1, setDiv1] = useState(true);
	const [div2, setDiv2] = useState(false);

	const randomGreeting = [
		"Salutations! What's new in your world?",
		"Ahoy there! Long time no chat.",
		`Hey there, ${username}!`,
		`Hi, ${username}!`,
		`Greetings, ${username}!`,
		`Hello, ${username}!`,
		`Welcome, ${username}!`,
		`Hey, ${username}, Let's Begin!`,
		`Hiya, ${username}!`,
		`Howdy, ${username}!`,
		`Aloha, ${username}!`,
		`Yo, ${username}!`,
		`Hi there, ${username}!`,
		`Hola, ${username}!`,
		`Hey, ${username}, Let's Start!`,
		`Hey, ${username}, Ready to Roll?`,
		`Hello, ${username}, Your Journey Starts!`,
	];

	useEffect(() => {
		if (randomGreeting.length > 0) {
			const randomIndex = Math.floor(
				Math.random() * randomGreeting.length
			);
			setGreetings(randomGreeting[randomIndex]);
		} else {
			setGreetings("Hi! Guest User");
		}
	}, []);

	const changetodiv1 = (event) => {
		setDiv1(true);
		setDiv2(false);
		setInput("");

		const date = new Date().toLocaleDateString("en-GB");
		const newNoteData = {
			id: info.length + 1,
			title: input,
			createdDate: date,
			lastModifiedDate: date,
		};
		setInfo([...info, newNoteData]);
	};

	const changetodiv2 = () => {
		setDiv2(true);
		setDiv1(false);
	};

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	const handleCardClick = (item) => {
		console.log(item);
		const { title, id } = item;

		// router.push("/notes/" + id);
		// try {
		// 	const response = await fetch("/api/notevault", {
		// 		method: "POST",
		// 		headers: { "Content-Type": "application/json" },
		// 		body: JSON.stringify(item),
		// 	});
		// 	const data = await response.json();
		// 	console.log(data);
		// } catch {
		// 	console.log("fetch failed");
		// }
	};
	return (
		<>
			<SideMenu />
			<main className="ml-16">
				<div className="mx-4 my-4 sm:mx-20 sm:my-14 md:mx-48 md:my-24 font-poppins">
					<div className="flex justify-start items-center my-14">
						<div className="">
							<h1 className="text-white underline text-clamp-notes-greeting font-bold font-poppins ">
								{greetings}
							</h1>
							<p className="text-text-100">
								Let&apos;s continue with the notes
							</p>
						</div>
					</div>
					<div className="my-6">
						<div className="grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-5 gap-2.5">
							{info.map((item) => (
								<Link
									href={"/notes/" + item.id}
									key={item.id}
									className=""
								>
									<Card
										{...item}
										onClick={() => handleCardClick(item)}
									/>
								</Link>
							))}

							<div className="h-[84px] lg:h-auto p-5 transition-all hover:border-stone-500  rounded text-white bg-dark-100 flex flex-col items-center justify-center">
								<div
									onClick={changetodiv2}
									className=""
								>
									{div1 && (
										<div className="flex justify-center items-center text-xs text-text-100">
											<span>+ New</span>
										</div>
									)}
								</div>
								{div2 && (
									<div className="flex items-center gap-x-2 justify-between w-full">
										<input
											// className="flex-grow grow-1 flex-[1]"
											className="text-sm font-medium placeholder:text-text-200 placeholder:text-xs p-0 text-text-100 bg-transparent border-b-1 focus:ring-0 putline-none border-0 focus:outline-none focus:border-0"
											placeholder="Note title"
											type="text"
											value={input}
											onChange={handleInputChange}
										/>
										<button onClick={changetodiv1}>
											<Image
												src={`${
													input.length > 0
														? "/images/thumbs-up.png"
														: "/images/thumbs-up-disabled.png"
												}`}
												alt="profile picture"
												width={100}
												height={100}
												className={`${
													input.length > 0 &&
													"hover:animate-waving-hand"
												} h-5 w-5 sm:w-5 sm:h-5 rounded-full flex-wrap`}
											/>
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default UserPage;
