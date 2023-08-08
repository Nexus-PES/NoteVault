"use client";
import { useEffect, useRef } from "react";

const Textarea = () => {
	useEffect(() => {
		textareaRef.current.addEventListener("input", (e) => {
			console.log("asdf");
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
			className="text-base font-normal block w-full rounded-md border-0 px-3.5 py-2 text-text-100 sm:text-sm sm:leading-6 bg-transparent focus:ring-0"
		></textarea>
	);
};

export default Textarea;
