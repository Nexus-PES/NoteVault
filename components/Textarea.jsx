"use client";
import { useEffect, useRef } from "react";

const Textarea = ({ userNotes, reference, ...props }) => {
	useEffect(() => {
		reference.current.addEventListener("input", (e) => {
			e.target.style.height = "auto";
			e.target.style.height = e.target.scrollHeight + "px";
		});
	}, []);
	const textareaRef = useRef();
	return (
		<textarea
			{...props}
			ref={reference}
			spellCheck={false}
			autoCorrect={false}
			autoFocus={true}
			defaultValue={userNotes}
			placeholder="Your Notes"
			className="tracking-wide text-base font-normal block w-full rounded-md py-2 text-text-100 sm:leading-6 bg-transparent border-0 focus:border-0 focus:ring-0"
		/>
	);
};

export default Textarea;
