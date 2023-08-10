"use client";
import { useEffect, useRef } from "react";

const Textarea = () => {
	useEffect(() => {
		textareaRef.current.addEventListener("input", (e) => {
			e.target.style.height = "auto";
			e.target.style.height = e.target.scrollHeight + "px";
		});
	}, []);
	const textareaRef = useRef();
	return (
		<textarea
			ref={textareaRef}
			spellCheck={false}
			autoCorrect={false}
			placeholder={"Your Notes"}
			className="text-base font-normal border-none block w-full rounded-md px-3.5 py-2 text-text-100 sm:text-sm sm:leading-6 bg-transparent border focus:ring-0 focus:border-2 focus:border-white"
		>
		</textarea>
	);
};

export default Textarea;
