"use client";

import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import Link from "next/link";
import { notesData } from "../../../data";
import { BsRocketTakeoff } from "react-icons/bs";
import { useSession, signIn } from "next-auth/react";
import { CardSkeleton, SkeletonHeading } from "../../../components/Skeleton";

const UserPage = () => {
	const { data: session, status } = useSession();

	const [username, setUsername] = useState("Guest User");

	useEffect(() => {
		if (status == "authenticated") {
			setUsername(session.user.name);
		}
	}, [status]);

	const [greetings, setGreetings] = useState("");
	const [input, setInput] = useState("");
	const [showAddCard, setShowAddCard] = useState(false);

	const [info, setInfo] = useState([]);

	const randomGreeting = [
		`Salutations! ${username}`,
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

		if (localStorage.getItem("allNotes") === null) {
			localStorage.setItem("allNotes", JSON.stringify(notesData));
		}
		const sortedNotes = JSON.parse(localStorage.getItem("allNotes")).sort(
			(obj1, obj2) =>
				Number(obj2.lastModifiedDate) - Number(obj1.lastModifiedDate)
		);
		setInfo(sortedNotes);
		// console.log(sortedNotes)
	}, [username, showAddCard]); // eslint-disable-line no-console

	// const changetodiv1 = (event) => {
	// 	setDiv1(true);
	// 	setDiv2(false);

	// 	const date = new Date().toLocaleDateString("en-GB");
	// 	const newNoteData = {
	// 		id: info.length + 1,
	// 		title: input,
	// 		createdDate: date,
	// 		lastModifiedDate: date,
	// 	};
	// };

	const addNewCard = () => {
		const date = new Date().toLocaleDateString("en-GB");
		const newNoteData = {
			id: info.length + 1,
			title: input,
			createdDate: date,
			content: "",
			lastModifiedDate: date,
		};

		setInput("");
		// setInfo([...info, newNoteData]);
		localStorage.setItem(
			"allNotes",
			JSON.stringify([...info, newNoteData])
		);
		setShowAddCard(false);
	};

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	const handleCardClick = (item) => {
		const { title, id } = item;
	};

	if (status === "unauthenticated") {
		return (
			<div className="w-full h-full flex items-center justify-center text-white font-poppins">
				<div className="flex h-full w-full items-center justify-center">
					<div className="flex space-x-4 rounded border border-dark-100 bg-dark-100 p-6 shadow-md">
						<div className="flex flex-col">
							<div className="w-auto sm:w-64 md:w-80 space-y-2 sm:space-y-4">
								<h5 className="text-sm sm:text-base">
									User Unauthenticated
								</h5>
								<div className="flex flex-col space-y-2">
									<p className="text-xs sm:text-sm text-text-100">
										Sign In again to access your notes
									</p>
								</div>
								<div className="flex items-center space-x-2">
									<button className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-semibold ease-out duration-200 rounded-md transition-all outline-none outline-0 focus-visible:border-4 bg-secondary-600 border-slate-800 hover:bg-secondary-600/80 text-white  focus-visible:outline-white shadow-sm text-xs px-5 py-2">
										<button
											onClick={() => signIn("github")}
											className="truncate"
										>
											Sign In
										</button>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<main className="flex flex-col flex-1 w-full overflow-x-hidden font-poppins">
				<nav className="flex h-12 max-h-12 items-center justify-between py-2 pl-14 border-b border-dark-100 text-white text-xs">
					Navbar
				</nav>
				<div
					style={{ maxHeight: "100vh" }}
					className="flex-1 overflow-y-auto"
				>
					{/* <div className="mx-6 flex flex-col items-center space-x-6"> */}
					<div className="mx-6 flex justify-start items-center my-14">
						{status === "loading" ||
						(status == "authenticated" &&
							greetings.includes("Guest User")) ? (
							<SkeletonHeading />
						) : (
							<div className="">
								<h1 className="text-white underline text-clamp-notes-greeting font-bold font-poppins ">
									{greetings}
								</h1>
								<p className="text-text-100">
									Let&apos;s continue with the notes
								</p>
							</div>
						)}
					</div>
					<div className="my-6">
						<div className="mx-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
							{status === "loading" ||
							(status == "authenticated" &&
								greetings.includes("Guest User")) ? (
								<>
									<CardSkeleton />
									<CardSkeleton />
									<CardSkeleton />
									<CardSkeleton />
									<CardSkeleton />
									<CardSkeleton />
									<CardSkeleton />
									<CardSkeleton />
								</>
							) : (
								<>
									{info.map((item) => (
										<Link
											href={`/${username
												.split(" ")
												.join("")}/${item.id}`}
											key={item.id}
										>
											<Card
												{...item}
												onClick={() =>
													handleCardClick(item)
												}
											/>
										</Link>
									))}

									<div className="h-28 p-5 transition-all hover:border-stone-500 rounded text-white bg-dark-100 flex flex-col items-center justify-center">
										{showAddCard ? (
											<div className="flex items-center justify-center w-full">
												<input
													className="text-sm w-full flex-grow flex-[1] font-medium placeholder:text-text-200 placeholder:text-xs p-0 text-text-100 bg-transparent focus:ring-0 putline-none border-0 focus:outline-none focus:border-0"
													placeholder="Note title"
													type="text"
													value={input}
													onChange={handleInputChange}
												/>
												<button
													onClick={
														input.length > 0
															? addNewCard
															: undefined
													}
												>
													<BsRocketTakeoff
														className={`${
															input.length > 0 &&
															"animate-waving-hand text-white "
														} w-8 h-8 flex-wrap hover:bg-text-200 focus:bg-text-200 rounded p-1.5`}
													/>
												</button>
											</div>
										) : (
											<div className="flex justify-center items-center text-xs text-text-100">
												<button
													onClick={() =>
														setShowAddCard(true)
													}
												>
													+ New
												</button>
											</div>
										)}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default UserPage;
