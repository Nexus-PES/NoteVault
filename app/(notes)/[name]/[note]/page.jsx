"use client";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";

import React, { useEffect, useState } from "react";
import FooterRibbon from "./FooterRibbon.jsx";
import Image from "next/image";

const Notes = ({ params }) => {
	const [notes, setNotes] = useState({
		id: 10,
		title: "Art Project",
		createdDate: "06/08/2023",
		lastModifiedDate: "26/08/2023",
		content: "Added progress photos of the oil painting in process.",
	});

	const [userNotes, setUserNotes] = useState(notes.content);

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
		setIsRecording(prev => !prev)
	}

	// const [saveTime, setSaveTime] =
	// 	useState(null);

	// const handleClick = () => {
	// 	const currentTime = new Date();
	// 	setSaveTime(currentTime);
	// };

	return (
		<div className="font-handlee flex text-text-100 gap-y-10 flex-col mx-4 my-4 sm:mx-20 sm:my-14 md:mx-48 md:my-24 ">
			<div className="flex flex-row-reverse gap-4">
				<Button>Save</Button>
				<Button
					size="sm"
					type="glory"
					onClick={handleRecording}
				>
					<Image
						src="/images/microphone.svg"
						width={20}
						height={20}
						alt="mic"
					/>
				</Button>
				<Button
					size="sm"
				>
					<Image
						src="/images/edit.svg"
						width={20}
						height={20}
						alt="mic"
					/>
				</Button>
			</div>

			<input
				type="text"
				placeholder="Your Notes"
				defaultValue={notes.title}
				className="text-2xl md:text-4xl font-bold block w-full rounded py-2 text-white underline sm:text-sm sm:leading-6 bg-transparent focus:ring-0 border-0 focus:bg-dark-100"
				maxLength={100}
				minLength={3}
				required
			/>

			<Textarea {...notes} userNotes={userNotes} onChange={(e)=>setUserNotes(e.target.value)}/>

			<FooterRibbon {...notes} isRecording={isRecording} userNotes={userNotes}/>
		</div>
	);
};

export default Notes;
