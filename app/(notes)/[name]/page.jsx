"use client";

import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import Warning from "../../../components/Warning";
import Link from "next/link";
import { notesData } from "../../../data";
import { BsRocketTakeoff } from "react-icons/bs";
import { useSession, signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
	CardSkeleton,
	SkeletonHeading,
	SkeletonTitle,
} from "../../../components/Skeleton";
import NotesNavbar from "../../../components/NotesNavbar";
import { v4 } from "uuid";

const UserPage = () => {
	const { data: session, status } = useSession();

	const pathname = usePathname();
	const router = useRouter();
	const [user, setUser] = useState({
		name: "Guest User",
		email: "",
		image: "/",
	});

	useEffect(() => {
		if (status == "authenticated") {
			setUser(session.user);
		}
	}, [status]);

	const [greetings, setGreetings] = useState("");
	const [input, setInput] = useState("");
	const [showAddCard, setShowAddCard] = useState(false);

	const [info, setInfo] = useState([]);

	const randomGreeting = [
		`Salutations! ${user.name}`,
		`Hey there, ${user.name}!`,
		`Hi, ${user.name}!`,
		`Greetings, ${user.name}!`,
		`Hello, ${user.name}!`,
		`Welcome, ${user.name}!`,
		`Hey, ${user.name}, Let's Begin!`,
		`Hiya, ${user.name}!`,
		`Howdy, ${user.name}!`,
		`Aloha, ${user.name}!`,
		`Yo, ${user.name}!`,
		`Hi there, ${user.name}!`,
		`Hola, ${user.name}!`,
		`Hey, ${user.name}, Let's Start!`,
		`Hey, ${user.name}, Ready to Roll?`,
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
		// const sortedNotes = JSON.parse(localStorage.getItem("allNotes")).sort(
		// 	(obj1, obj2) => Number(obj1.createdDate) - Number(obj2.createdDate)
		// );
		const userNotes = JSON.parse(localStorage.getItem("allNotes"));
		setInfo(arrSorting(userNotes, "asc"));
	}, [user, showAddCard]); // eslint-disable-line no-console

	const addNewCard = () => {
		const newNoteData = {
			id: v4(),
			title: input,
			content: "",
			createdDate: new Date(),
			lastModifiedDate: new Date(),
		};

		setInput("");
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

	const arrSorting = (arr, type, attribute = "") => {
		if (type === "asc") {
			const ascending = arr.sort(
				(a, b) => new Date(a.createdDate) - new Date(b.createdDate)
			);
			return ascending;
		} else {
			const descending = arr.sort((a, b) => {
				return (
					new Date(b.lastModifiedDate) - new Date(a.lastModifiedDate)
				);
			});
			return descending;
		}
	};

	if (status === "unauthenticated") {
		return (
			<Warning
				title="User Unauthenticated"
				caption="Sign In again to access your notes"
				onClick={() => signIn("github")}
			>
				Sign In
			</Warning>
		);
	}

	
	if (
		(status === "authenticated") &&
		pathname !== `/${session.user.email.split("@")[0]}`
	) {
		console.log(status, pathname);
		console.log(pathname !== `/${session.user.email.split("@")[0]}`);
		router.push(`/${session.user.email.split("@")[0]}`);
	}

	return (
		<>
			<main className="flex flex-col flex-1 w-full overflow-x-hidden font-poppins">
				<NotesNavbar
					user={user}
					main={true}
				/>
				<div
					style={{ maxHeight: "100vh" }}
					className="flex-1 overflow-y-auto"
				>
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

					{status === "loading" ||
					(status === "authenticated" &&
						greetings.includes("Guest User")) ? (
						<>
							<SkeletonTitle />
							<div className="mx-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
								<CardSkeleton />
								<CardSkeleton />
								<CardSkeleton />
								<CardSkeleton />
							</div>
						</>
					) : (
						<div className="mx-6">
							<h2 className="text-text-100 my-2">Recent Notes</h2>
							<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
								{arrSorting(info, "desc")
									.slice(0, 4)
									.map((item) => (
										<Link
											href={`/${
												user.email.split("@")[0]
											}/${item.id}`}
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
							</div>
						</div>
					)}

					<div className="my-6">
						{status === "loading" ? (
							<SkeletonTitle />
						) : (
							<h2 className="text-text-100 mx-6 my-2">
								All Notes
							</h2>
						)}
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
									{arrSorting(info, "asc").map((item) => (
										<Link
											href={`/${
												user.email.split("@")[0]
											}/${item.id}`}
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
													autoFocus
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
											<button
												className="h-full w-full flex justify-center items-center text-xs text-text-100"
												onClick={() =>
													setShowAddCard(true)
												}
											>
												<span>+ New</span>
											</button>
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
