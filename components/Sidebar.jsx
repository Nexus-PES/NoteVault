"use client";
import { BsLayoutSidebar } from "react-icons/bs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideMenu = ({ className }) => {
	const { data: session } = useSession();
	const [collapsed, setCollapsed] = useState(true);

	const handleCollapse = () => {
		setCollapsed(!collapsed);
		console.log(collapsed);
	};

	let ab = [1, 2, 3, 4, 5];
	let avatar = "/images/profile.png";

	if (session) {
		avatar = session.user.image;
	}
	return (
		<aside className={`w-auto flex h-auto ${className}`}>
			<div className="fixed my-0 border-e border-text-200 flex flex-col justify-between gap-y-4 w-16 py-6 h-full bg-dark-100 items-center">
				<div className="flex items-center gap-2 flex-col">
					<Link href="/">
						<Image
							src="/images/logo.svg"
							alt="profile picture"
							width={100}
							height={100}
							className="h-9 w-9 sm:w-10 sm:h-10 rounded-full flex-wrap mb-3"
						/>
					</Link>
					<button>
						<BsLayoutSidebar
							onClick={handleCollapse}
							className="w-8 h-8 text-white hover:bg-text-200 focus:bg-text-200 rounded p-1.5"
						/>
					</button>
				</div>

				<div>
					<Image
						src={avatar}
						alt="profile picture"
						width={100}
						height={100}
						className="h-9 w-9 sm:w-10 sm:h-10 rounded-full flex-wrap"
					/>
				</div>
			</div>
			{!collapsed && (
				<div className="fixed ml-10 bg-dark-100 h-full w-52 px-5 py-7 space-y-2">
					<div className="">
						<p className="font-poppins text-white text-sm">
							Your Vault
						</p>
					</div>
					<div className="flex flex-col w-41 gap-2">
					</div>
				</div>
			)}
		</aside>
	);
};

export default SideMenu;
