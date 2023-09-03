"use client";
import { useEffect } from "react";

const Textarea = ({ userNotes, reference, ...props }) => {
	useEffect(() => {
		reference.current.addEventListener("input", (e) => {
			e.target.style.height = "auto";
			e.target.style.height = e.target.scrollHeight + "px";
		});
	}, []); // eslint-disable-line no-console

	return (
		<>
			<textarea
				{...props}
				label="content"
				ref={reference}
				spellCheck={false}
				autoCorrect="false"
				autoFocus={true}
				defaultValue={userNotes}
				placeholder=""
				className="hide-scrollbar min-h-[60vh] tracking-wide text-base font-normal block w-full rounded-md py-2 text-text-100 sm:leading-6 bg-transparent border-0 focus:border-0 focus:ring-0"
			/>
		</>
	);
	};

export default Textarea;