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
		<>
			<aside
				className={`flex w-16 flex-col justify-between overflow-y-hidden p-2 border-r border-slate-800 h-screen ${className}`}
			>
				<div className="flex items-center gap-1.5 flex-col my-2">
					<Link href="/">
						<Image
							src="/images/logo.svg"
							alt="profile picture"
							width={100}
							height={100}
							className="h-8 w-8 rounded-full flex-wrap mb-3"
						/>
					</Link>
					<button className="transition-colors duration-200 flex group items-center justify-center h-12 w-12 rounded hover:bg-dark-100 hover:text-gray-1200 shadow-sm text-gray-1200">
						<BsLayoutSidebar
							size={24}
							onClick={handleCollapse}
							className="group-hover:text-white stroke-1 text-slate-500"
						/>
					</button>
					<button className="transition-colors duration-200 flex group items-center justify-center h-12 w-12 rounded hover:bg-dark-100 hover:text-gray-1200 shadow-sm text-gray-1200">
						<BsLayoutSidebar
							size={24}
							onClick={handleCollapse}
							className="group-hover:text-white stroke-[1px] text-slate-500"
						/>
					</button>
					<button className="transition-colors duration-200 flex group items-center justify-center h-12 w-12 rounded hover:bg-dark-100 hover:text-gray-1200 shadow-sm text-gray-1200">
						<BsLayoutSidebar
							size={24}
							onClick={handleCollapse}
							className="group-hover:text-white stroke-1 text-slate-500"
						/>
					</button>
				</div>

				<div className="flex items-center gap-2 flex-col my-2">
					<Image
						src={avatar}
						alt="profile picture"
						width={100}
						height={100}
						className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-scale-200 hover:bg-scale-500 text-scale-900 hover:text-scale-1200  bg-scale-500 shadow-sm text-scale-1200"
					/>
				</div>

				{/* {!collapsed && (
				<div className="fixed ml-10 bg-dark-100 h-full w-52 px-5 py-7 space-y-2">
					<div className="">
						<p className="font-poppins text-white text-sm">
							Your Vault
						</p>
					</div>
					<div className="flex flex-col w-41 gap-2"></div>
				</div>
			)} */}
			</aside>
			{!collapsed && (
				<div className="hide-scrollbar flex w-64 flex-col border-r border-slate-800"></div>
			)}
		</>
	);
};

export default SideMenu;
