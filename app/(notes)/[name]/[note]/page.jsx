"use client";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";

import React, { useEffect, useState, useRef } from "react";
import FooterRibbon from "./FooterRibbon.jsx";
import Image from "next/image";
import SideMenu from "../../../../components/Sidebar";
import Link from "next/link";

const Notes = ({ params }) => {
	const [notes, setNotes] = useState({
		id: 10,
		title: "Art Project",
		createdDate: "06/08/2023",
		lastModifiedDate: "19/08/2023",
		content: "Added progress photos of the oil painting in process.",
	});

	const [userNotes, setUserNotes] = useState(notes.content);
	// const titleRef = useRef(null);
	const textareaRef = useRef(null);

	const [isRecording, setIsRecording] = useState(false);

	useEffect(() => {
		const getNotes = async () => {
			try {
				const res = await fetch("/api/notevault", {
					method: "GET",
					body: { note: 5 },
				});
				const data = await res.json();

				setNotes(data);
				console.log(notes);
			} catch {
				console.log("notes not found");
			}
		};
		getNotes();
	}, []);

	const handleRecording = () => {
		setIsRecording((prev) => !prev);
	};

	const handleSave = () => {
		setNotes({
			...notes,
			content: userNotes,
			lastModifiedDate: new Date().toLocaleDateString("en-GB"),
		});
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			textareaRef.current.focus();
		}
	};

	return (
		<>
			<SideMenu className="hidden sm:inline-block" />
			<main className="">
				<div className="font-handlee flex text-text-100 gap-y-10 flex-col mx-4 my-14 sm:mx-20 md:mx-48 md:my-24 ">
					<div className="flex gap-4 justify-between sm:justify-end items-center">
						<Link className="inline-block sm:hidden text-xs text-center text-text-100 font-semibold hover:underline hover:bg-dark-100 rounded px-4 py-2 transition font-poppins" href="/notes">
							Back
						</Link>

						<div className="flex gap-x-2">
							<Button size="sm">
								<Image
									src="/images/edit.svg"
									width={20}
									height={20}
									alt="mic"
								/>
							</Button>
							<Button
								size="sm"
								type="glory"
								className={`${
									isRecording &&
									"ring-1 ring-offset-1 rounded-lg ring-white"
								}`}
								onClick={handleRecording}
							>
								<Image
									src="/images/microphone.svg"
									width={20}
									height={20}
									alt="mic"
								/>
							</Button>
							<Button onClick={handleSave}>Save</Button>
						</div>
					</div>

					<input
						type="text"
						placeholder="Your Notes"
						defaultValue={notes.title}
						onChange={(e) =>
							setNotes({ ...notes, title: e.target.value })
						}
						onKeyDown={(e) => handleKeyDown(e)}
						className="text-clamp-subheading font-bold block w-full rounded py-2 text-white underline sm:text-sm sm:leading-6 bg-transparent focus:ring-0 border-0 focus:bg-dark-100"
						maxLength={100}
						minLength={3}
						required
					/>

					<Textarea
						{...notes}
						userNotes={userNotes}
						// ref={textareaRef}
						onChange={(e) => setUserNotes(e.target.value)}
					/>

					<FooterRibbon
						{...notes}
						isRecording={isRecording}
						userNotes={userNotes}
					/>
				</div>
			</main>
		</>
	);
};

export default Notes;
