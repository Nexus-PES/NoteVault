"use client";
import {
	useEffect,
	useRef,
} from "react";

const Textarea = ({ displayer }) => {
	useEffect(() => {
		textareaRef.current.addEventListener(
			"input",
			(e) => {
				e.target.style.height =
					"auto";
				e.target.style.height =
					e.target
						.scrollHeight +
					"px";
			}
		);
	}, []);
	const textareaRef = useRef();
	return (
		<textarea
			ref={textareaRef}
			spellCheck={false}
			autoCorrect={false}
			autoFocus={true}
			placeholder="Your Notes"
			className="text-base font-normal block w-full rounded-md px-3.5 py-2 text-text-100 sm:leading-6 bg-transparent border border-white focus:border-2 focus:border-white"
		>
			{displayer}
		</textarea>
	);
};

export default Textarea;
