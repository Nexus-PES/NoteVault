import Image from "next/image";
import React from "react";

import MenuButton from "./MenuButton";
import { BsArrowRight, BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ title, createdDate, lastModifiedDate, ...props }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		alert("clicked");
	};

	const links = [
		{ href: "/account-settings", label: "Account settings" },
		{ href: "/support", label: "Support" },
		{ href: "/license", label: "License" },
		{ href: "/sign-out", label: "Sign out" },
	];

	return (
		<div
			{...props}
			className="group relative  bg-dark-100 text-white gap-2 cursor-pointer hover:bg-dark/40 hover:shadow-md  border-panel-border-light hover:border-panel-border-hover-light  flex flex-col justify-between h-28 rounded p-5 hover:border-stone-500 transition duration-150 ease-in-out"
		>
			<div className="flex justify-between items-center">
				<p className="truncate text-white text-sm font-poppins font-medium capitalize ">
					{title}
				</p>
				<div onClick={(e) => e.stopPropagation()}>
					<MenuButton
						links={links}
						onClick={(e) => e.stopPropagation()}
					>
						<BsThreeDotsVertical className="h-5 w-5" />
					</MenuButton>
				</div>
			</div>
			<p className="text-xs text-text-100 flex items-center gap-x-1">
				<span>{createdDate}</span>
				<BsArrowRight className="w-5 inline-block" />
				<span>{lastModifiedDate}</span>
			</p>
		</div>
	);
};
export default Card;
