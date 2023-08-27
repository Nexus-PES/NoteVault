"use client";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";
import SideMenu from "../../../../components/Sidebar";
import FooterRibbon from "../../../../components/FooterRibbon.jsx";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notesData } from "../../../../data";

const Notes = ({ params }) => {
	const id  = params.note;

	const [notes, setNotes] = useState(notesData.find((note) => note.id == id));

	const [recognizedText, setRecognizedText] = useState('placeholder');
	let recognition;

	const [userNotes, setUserNotes] = useState(notes.content);
	// const titleRef = useRef(null);
	const textareaRef = useRef(null);

	const [isRecording, setIsRecording] = useState(false);
	const [status, setStatus] = useState("saved");

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

		// document.addEventListener('click', ()=>{

		// })
		getNotes();
	}, []);



	const startRecognition = () => {
		recognition = new window.webkitSpeechRecognition();
		recognition.onresult = (event) => {
		  const transcript = event.results[0][0].transcript;
		  setRecognizedText(transcript);
		};
		recognition.start();
	  };
	
	  const stopRecognition = () => {
		if (recognition) {
		  recognition.stop();
		}
	  };

	const handleRecording = () => {
		setIsRecording((prev) => !prev);

	};

	const handleSave = () => {
		setNotes({
			...notes,
			content: userNotes,
			lastModifiedDate: new Date().toLocaleDateString("en-GB"),
		});
		setStatus("updating");

		setTimeout(() => {
			setStatus("saved");
		}, 2000);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			textareaRef.current.focus();
		}
	};

	const handleTextareaChange = (e) => {
		setUserNotes(e.target.value);
		setStatus("pending");
	};


	// return (
	// 	<div className="text-white">
	// 	  <button onClick={startRecognition}>Start Speech Recognition</button>
	// 	  <button onClick={stopRecognition}>Stop Speech Recognition</button>
	// 	  <p>Recognized Text: {recognizedText}</p>
	// 	</div>
	//   );


	return (
		<>
			<SideMenu className="hidden sm:inline-block" />
			<main>
				<div className="font-handlee flex text-text-100 gap-y-10 flex-col mx-4 my-14 sm:mx-20 md:mx-28 ">
					<div className="flex gap-4 justify-between sm:justify-end items-center">
						<Link
							className="inline-block sm:hidden text-xs text-center text-text-100 font-semibold hover:underline hover:bg-dark-100 rounded px-4 py-2 transition font-poppins"
							href="/notes"
						>
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
					<div className="flex flex-col gap-y-2 sm:gap-y-4">
						<input
							type="text"
							placeholder="Your Notes"
							defaultValue={notes.title}
							onChange={(e) =>
								setNotes({ ...notes, title: e.target.value })
							}
							onKeyDown={(e) => handleKeyDown(e)}
							// text-lg sm:text-3xl md:text-5xl
							className="
						text-clamp-notes-greeting
						font-bold block w-full rounded py-2 text-white underline sm:leading-6 bg-transparent focus:ring-0 border-0"
							maxLength={40}
							minLength={3}
							required
						/>

						<Textarea
							// {...notes}
							userNotes={userNotes}
							reference={textareaRef}
							onChange={handleTextareaChange}
						/>

						<FooterRibbon
							{...notes}
							status={status}
							isRecording={isRecording}
							userNotes={userNotes}
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default Notes;
