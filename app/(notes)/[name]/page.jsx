"use client";

import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import Link from "next/link";
import { notesData } from "../../../data";
import SideMenu from "../../../components/Sidebar";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import { useSession } from "next-auth/react";
import Button from "../../../components/Button";

const UserPage = ({ params }) => {
	const { data: session } = useSession();

	let username;
	try {
		username = session.user.name;
	} catch {
		username = "Guest User";
	}

	// console.log(username.split('%2B'))

	const [greetings, setGreetings] = useState("");
	const [info, setInfo] = useState(notesData);
	const [input, setInput] = useState("");

	const [div1, setDiv1] = useState(true);
	const [div2, setDiv2] = useState(false);

	const randomGreeting = [
		`Salutations! ${username}`,
		`Ahoy ${username}! Long time no chat.`,
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

	if (session) {
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
							<div className="grid gris-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-5 gap-2.5">
								{info.map((item) => (
									<Link
										href={"/notes/" + item.id}
										key={item.id}
										className=""
									>
										<Card
											{...item}
											onClick={() =>
												handleCardClick(item)
											}
										/>
									</Link>
								))}

								<div className="h-[84px] lg:h-auto p-5 transition-all hover:border-stone-500 rounded text-white bg-dark-100 flex flex-col items-center justify-center">
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
										<div className="flex items-center justify-center w-full">
											<input
												className="text-sm w-16 flex-grow flex-[1] font-medium placeholder:text-text-200 placeholder:text-xs p-0 text-text-100 bg-transparent focus:ring-0 putline-none border-0 focus:outline-none focus:border-0"
												placeholder="Note title"
												type="text"
												value={input}
												onChange={handleInputChange}
											/>
											<button
												onClick={
													input.length > 0 &&
													changetodiv1
												}
											>
												<RocketLaunchIcon
													className={`${
														input.length > 0 &&
														"animate-waving-hand text-white "
													} w-8 h-8 flex-wrap hover:bg-text-200 focus:bg-text-200 rounded p-1.5`}
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
	} else {
		return (
			<div className="flex items-center justify-center h-screen">
				<div className="bg-dark-100 text-white p-8 rounded-lg shadow-md">
					<h2 className="text-2xl font-bold mb-4">Access Denied</h2>
					<p className="text-lg">
						You are not authenticated to view this content. Please
						log in to access it.
					</p>
				</div>
					<Button
						href="/"
						className="self-end"
						type="glory"
					>
						Homepage
					</Button>
			</div>
		);
	}
};

export default UserPage;
