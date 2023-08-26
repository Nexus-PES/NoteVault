"use client";
import React, { useState } from "react";
import { faq } from "../data";
import Image from "next/image";

const FAQ = () => {
	const [open, setOpen] = useState(0);
	return (
		<div>
			<div className="mb-8 sm:mb-12 md:mb-14">
				<h1 className="font-poppins font-semibold text-[2.16rem] text-white">
					No Rush to Believe in Us
				</h1>
				<p className="text-text-100 text-base">
					If you still feel something is bothering you, feel free to
					check the Frequently Asked Questions
				</p>
			</div>

			<section className="flex flex-col gap-y-5">
				{faq.map((faq_elt) => (
					<FaqBox
						key={faq_elt.id}
						title={faq_elt.title}
						desc={faq_elt.desc}
						id={faq_elt.id}
						open={open}
						setOpen={setOpen}
					/>
				))}
			</section>
		</div>
	);
};

export default FAQ;

const FaqBox = ({ id, title, desc, open, setOpen }) => {
	let isOpen;
	if (open === id) {
		isOpen = true;
	} else {
		isOpen = false;
	}

	const handleClick = () => {
		if (open === id) {
			setOpen(0);
		} else {
			setOpen(id);
		}
	};
	return (
		<div className="p-5 flex flex-col gap-y-2.5 bg-dark-100 rounded font-poppins text-xs">
			<div className="flex justify-between items-center gap-x-2">
				<div className="text-white text-justify sm:text-left">
					{title}
				</div>
				<Image
					src="/images/add.svg"
					alt="plus"
					height={20}
					width={20}
					className={`${
						isOpen ? "rotate-45" : "rotate-0"
					} transition-all self-start sm:self-center`}
					onClick={handleClick}
				/>
			</div>
			<p
				className={`${
					isOpen
						? "h-fit text-opacity-100"
						: "h-0 overflow-hidden text-opacity-0"
				} transition-all text-text-100 `}
			>
				{desc}
			</p>
		</div>
	);
};
