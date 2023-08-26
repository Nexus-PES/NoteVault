"use client";

import React, { useState, useEffect } from "react";

import Card from "../../../components/Card";
import Link from "next/link";
import { notesData } from "../../../data";

const UserPage = ({ params }) => {
	const username = "Sarang";

	var [greetings, setGreetings] = useState("");
	const [div1, setDiv1] = useState(true);
	const [div2, setDiv2] = useState(false);
	const [input, setInput] = useState("");
	const [info, setInfo] = useState(notesData);

	var randomGreeting = [
		"Greetings, my friend! How's life treating you?",
		"Salutations! What's new in your world?",
		"Ahoy there! Long time no chat.",
		"Well met! What's the latest scoop?",
		"Hey you! How's everything on your end?",
		"Hola amigo! It's time for another catch-up.",
		"Hey sunshine! What's been keeping you busy?",
		"Yoohoo! Let's have a splendid chat, shall we?",
		"Hey, hey! Ready to dive into some discussions",
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
			const randomIndex = Math.floor(Math.random() * randomGreeting.length);
			setGreetings(randomGreeting[randomIndex]);
		} else {
			setGreetings('Hi! Guest User');
		}
	}, []);

	const changetodiv1 = (event) => {
		setDiv1(true);
		setDiv2(false);
		setInput("");
		const newTitle = { title: input };
		setInfo([...info, newTitle]);
	};

	const changetodiv2 = () => {
		setDiv2(true);
		setDiv1(false);
	};

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div className="mx-8 my-4 sm:mx-20 sm:my-14 md:mx-48 md:my-24 font-poppins">
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
				<div className="grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-5 gap-2.5">
					{info.map((item) => (
						<div
							key={item.id}
							className=""
						>
							<Link
								href={`${params.name}` + "/" + `${item.title}`}
							>
								<Card {...item} />
							</Link>
						</div>
					))}

					<div className="box-border p-5 transition hover:border-stone-500  rounded text-white bg-dark-100 flex flex-col gap-2">
						<div onClick={changetodiv2}>
							{div1 && (
								<div className="flex justify-center items-center">
									<span>+ New</span>
								</div>
							)}
						</div>
						<div>
							{div2 && (
								<div>
									<input
										className="text-black w-[150px] "
										placeholder="title"
										type="text"
										value={input}
										onChange={handleInputChange}
									/>
									<button
										className="border 1px bg mx-6 px-1 "
										onClick={changetodiv1}
									>
										Submit
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
