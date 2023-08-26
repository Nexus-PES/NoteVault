"use client";
import React, { useState } from "react";
import { faq } from "../data";
import Image from "next/image";

const FAQ = () => {
	const [open, setOpen] = useState(0);
	const [count, setCount] = useState(3);
	return (
		<div>
			<div className="mb-8 sm:mb-12 md:mb-14">
				<h1 className="font-poppins font-semibold text-clamp-subheading">
					<span className="text-primary">Trust</span> at your own
					pace.
				</h1>
				<p className="text-text-100 text-sm sm:text-base my-1">
					If you still feel something is bothering you, feel free to
					check the Frequently Asked Questions
				</p>
			</div>

			<section className="flex flex-col gap-y-5">
				{faq.map((faq_elt) => {
					if (faq_elt.id <= count) {
						return (
							<FaqBox
								key={faq_elt.id}
								title={faq_elt.title}
								desc={faq_elt.desc}
								id={faq_elt.id}
								open={open}
								setOpen={setOpen}
							/>
						);
					}
				})}
			</section>

			{(count < faq.length) && (
				<div className="flex items-center justify-center my-6">
					{/* <br className="w-[50px] h-1 flex-grow block bg-red-500" /> */}
					<button
						className="inline-block text-xs text-centertext-text-100 font-semibold hover:underline hover:bg-dark-100 rounded px-4 py-2 transition"
						onClick={() => setCount((prev) => prev + 2)}
					>
						Load More
					</button>
					{/* <br className="bg-text-200 w-full h-1 flex-grow block" /> */}
				</div>
			)}
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
		<div className="p-5 flex flex-col bg-dark-100 rounded font-poppins text-xs">
			<div className="flex justify-between items-center gap-x-2">
				<h2 className="text-white text-sm leading-tight">{title}</h2>
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
						? "h-fit text-opacity-100 mt-2.5"
						: "h-0 overflow-hidden text-opacity-0"
				} transition-all text-text-100`}
			>
				{desc}
			</p>
		</div>
	);
};
