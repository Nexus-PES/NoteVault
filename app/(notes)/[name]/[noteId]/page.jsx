"use client";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";
import SideMenu from "../../../../components/Sidebar";
import FooterRibbon from "../../../../components/FooterRibbon.jsx";

import React, { useEffect, useState, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "../../../../components/MenuButton";
import { useSession } from "next-auth/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotesNavbar from "../../../../components/NotesNavbar";
import { useRouter } from "next/navigation";


const Notes = ({ params }) => {
	const { data: session } = useSession();
	const { noteId } = params;
	 const router = useRouter();

	let username;
	try {
		username = session.user.name;
	} catch {
		username = "Guest User";
	}

	const allNotes = JSON.parse(localStorage.getItem("allNotes"));

	let currentNote = allNotes.find((el) => el.id == noteId);

	if (typeof currentNote === "undefined") {
		currentNote = {
			id: 0,
			title: "It's not a bug it's a feature 🐞",
			createdDate: "27/08/2023",
			lastModifiedDate: new Date().toLocaleDateString("en-GB"),
			content: "TODO",
		};
	}

	const [notes, setNotes] = useState(currentNote);
	const [markdownPreview, setMarkdownPreview] = useState(false);

	// const [recognizedText, setRecognizedText] = useState("placeholder");
	// let recognition;

	// const [userNotes, setUserNotes] = useState(notes.content);
	const textareaRef = useRef(null);

	const [isRecording, setIsRecording] = useState(false);
	const [status, setStatus] = useState("saved");

	// const startRecognition = () => {
	// 	recognition = new window.webkitSpeechRecognition();
	// 	recognition.onresult = (event) => {
	// 		const transcript = event.results[0][0].transcript;
	// 		setRecognizedText(transcript);
	// 	};
	// 	recognition.start();
	// };

	// const stopRecognition = () => {
	// 	if (recognition) {
	// 		recognition.stop();
	// 	}
	// };

	const handleRecording = () => {
		setIsRecording((prev) => !prev);
	};

	const handleSave = () => {
		setNotes({
			...notes,
			// content: userNotes,
			lastModifiedDate: new Date().toLocaleDateString("en-GB"),
		});
		setStatus("updating");

		setTimeout(() => {
			setStatus("saved");
		}, 1000);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			textareaRef.current.focus();
		}
	};

	const deleteNotes = (id) => {
		const newAllNotes = allNotes.filter((note) => note.id != id);
		localStorage.setItem("allNotes", JSON.stringify(newAllNotes));
		router.push(`/${username.split(" ").join("")}`);
		// window.location.href = `/${username.split(" ").join("")}`;
	}

	const handleTextareaChange = (e) => {
		// const inputString = e.target.innerHTML;
		const inputString = e.target.value;
		// const modifiedString = inputString.replace(
		// 	/#[a-zA-Z0-9_]+/g,
		// 	'<span class="text-primary">$&</span>'
		// );

		// setUserNotes(modifiedString);
		setNotes({ ...notes, content: inputString });
		setStatus("pending");
	};
	useEffect(() => {
		// const newNoteObj = {...notes, content: userNotes}
		const newAllNotesFiltered = allNotes.filter(
			(note) => note.id != noteId
		);
		const newAllNotes = [...newAllNotesFiltered, notes];

		localStorage.setItem("allNotes", JSON.stringify(newAllNotes));
	}, [notes]);

	const links = [
		{ href: "/account-settings", label: "Account settings" },
		{ href: "/support", label: "Support" },
		{ href: "/license", label: "License" },
		{ href: "/sign-out", label: "Sign out" },
	];

	// return (
	// 	<div className="text-white">
	// 	  <button onClick={startRecognition}>Start Speech Recognition</button>
	// 	  <button onClick={stopRecognition}>Stop Speech Recognition</button>
	// 	  <p>Recognized Text: {recognizedText}</p>
	// 	</div>
	//   );

	return (
		<>
			<main className="flex flex-col flex-1 w-full overflow-x-hidden font-poppins hide-scrollbar">
				<NotesNavbar
					username={username}
					params="/"
					paths={[
						{
							title: notes.title,
							href: `/${username.split(" ").join("")}/${
								notes.id
							}`,
						},
					]}
				/>
				<div
					style={{ maxHeight: "100vh" }}
					className="flex-1 overflow-y-auto hide-scrollbar"
				>
					{/* <div className="font-handlee flex text-text-100 gap-y-10 flex-col mx-4 my-14 sm:mx-20 md:mx-28 "> */}
					<div className="font-handlee flex text-text-100 gap-y-10 flex-col mx-4 mt-2 mb-8">
						<div className="flex gap-4 justify-between items-center">
							<Link
								className="text-xs text-center text-text-100 font-semibold hover:bg-dark-100 rounded px-4 py-2 transition font-poppins"
								href={
									session
										? `/${username.split(" ").join("")}`
										: "/"
								}
							>
								<span className="hidden sm:block">Back</span>
								<span className="block sm:hidden">
									<MdArrowBack size={18} />
								</span>
								<span className="sr-only">Go Back</span>
							</Link>

							<div className="flex gap-x-2">
								{/* <MenuButton links={links}>
									<Button size="sm">
										<Image
											src="/images/edit.svg"
											width={20}
											height={20}
											alt="edit"
											className=""
										/>
										<span className="sr-only">Edit</span>
									</Button>
								</MenuButton> */}

								<Button
									size="sm"
									className="border-gray-800 border bg-transparent hover:bg-gray-800 transition-colors text-primary "
									onClick={() => deleteNotes(notes.id)}
								>
									<BsTrash className="" size={16} />
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
									<span className="sr-only">Recording</span>
									<Image
										src="/images/microphone.svg"
										width={20}
										height={20}
										alt="mic"
									/>
								</Button>
								<Button
									size="sm"
									className={`${
										isRecording &&
										"ring-1 ring-offset-1 rounded-lg ring-white"
									}`}
									onClick={() =>
										setMarkdownPreview((prev) => !prev)
									}
								>
									{markdownPreview ? (
										<AiOutlineEyeInvisible size={20} />
									) : (
										<AiOutlineEye size={20} />
									)}
								</Button>
								<Button onClick={handleSave}>Save</Button>
							</div>
						</div>
						<div className="flex flex-col gap-y-2 sm:gap-y-4">
							<input
								type="text"
								label="title"
								placeholder="Note Title"
								defaultValue={notes.title}
								onChange={(e) =>
									setNotes({
										...notes,
										title: e.target.value,
									})
								}
								onKeyDown={(e) => handleKeyDown(e)}
								className={`${
									markdownPreview && "font-poppins text-white"
								} leading-10 text-clamp-notes-greeting font-bold block rounded py-2 placeholder:text-gray-600 text-text-100 sm:leading-6 bg-transparent focus:ring-0 border-0`}
								maxLength={40}
								minLength={3}
								required
							/>

							{markdownPreview ? (
								<div className="prose prose-sm prose-custom selection:bg-secondary-500 pb-8 ml-2 mb-8 mt-2 mr-4 max-w-none hide-scrollbar font-poppins">
									<ReactMarkdown
									// renderers={{ code: SyntaxHighlight }}
									>
										{notes.content}
									</ReactMarkdown>
								</div>
							) : (
								<Textarea
									userNotes={notes.content}
									reference={textareaRef}
									onInput={handleTextareaChange}
									onChange={handleTextareaChange}
								/>
							)}

							<FooterRibbon
								{...notes}
								markdownPreview={markdownPreview}
								status={status}
								isRecording={isRecording}
								userNotes={notes.content}
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Notes;

const SyntaxHighlight = ({ value, language }) => {
	return (
		<SyntaxHighlighter
			language={language ?? null}
			style={docco}
		>
			{value ?? null}
		</SyntaxHighlighter>
	);
};
