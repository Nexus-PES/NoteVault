"use client";
import { useEffect } from "react";

const Textarea = ({ userNotes, reference, ...props }) => {
	useEffect(() => {
		reference.current.addEventListener("input", (e) => {
			e.target.style.height = "auto";
			e.target.style.height = e.target.scrollHeight + "px";
		});
	}, []);

	return (
		<textarea
			{...props}
			ref={reference}
			spellCheck={false}
			autoCorrect='false'
			autoFocus={true}
			defaultValue={userNotes}
			placeholder="Your Notes"
			className="min-h-[50vh] tracking-wide text-base font-normal block w-full rounded-md py-2 text-text-100 sm:leading-6 bg-transparent border-0 focus:border-0 focus:ring-0"
		/>
		// className="textarea"
		// <span
		// 	{...props}
		// 	ref={reference}
		// 	spellCheck={false}
		// 	autoCorrect="false"
		// 	autoFocus={true}
		// 	// defaultValue={userNotes}
		// 	placeholder="Your Notes"
		// 	className="tracking-wide text-base font-normal block w-full rounded py-2 text-text-100 sm:leading-6 bg-transparent border-0 focus:outline-none focus:border-0 focus:ring-0"
		// 	role="textbox"
		// 	contenteditable="true"
		// >
		// 	{userNotes}
		// </span>
	);
};

export default Textarea;
