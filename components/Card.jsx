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
			className="box-border p-5 transition hover:border-stone-500 cursor-pointer rounded text-white bg-dark-100 flex flex-col gap-2"
		>
			<div className="flex justify-between items-center">
				<p className="truncate  text-white text-sm font-poppins font-medium capitalize">
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
