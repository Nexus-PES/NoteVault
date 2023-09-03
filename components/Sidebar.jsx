"use client";
import {
	BsCalendar3Event,
	BsColumnsGap,
	BsPerson,
	BsCreditCard2Back,
	BsCollection,
	BsGear,
	BsHypnotize,
	BsRocketTakeoff,
	BsShare,
	BsLayoutSidebarInset,
} from "react-icons/bs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideMenu = ({ className }) => {
	const { data: session } = useSession();
	const [collapsed, setCollapsed] = useState(true);

	const handleCollapse = () => {
		setCollapsed(!collapsed);
	};

	let avatar;
	if (session) {
		avatar = session.user.image;
	}
	return (
		<>
			<aside
				className={`flex w-16 flex-col justify-between overflow-y-hidden p-2 border-r border-dark-100 h-screen ${className}`}
			>
				<div className="flex items-center justify-center flex-col my-2 mx-1 divide-y divide-dark-100">
					<div className="flex flex-col gap-y-1 py-1 justify-center items-center">
						<Link href="/">
							<Image
								src="/images/logo.svg"
								alt="profile picture"
								width={100}
								height={100}
								className="h-8 w-8 rounded-full flex-wrap mb-3"
							/>
						</Link>
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsLayoutSidebarInset
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
					</div>
					<div className="flex flex-col gap-y-1 py-1 justify-center items-center">
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsCalendar3Event
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsColumnsGap
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
					</div>
					<div className="flex flex-col gap-y-1 py-1 justify-center items-center">
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsCollection
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsRocketTakeoff
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsShare
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
					</div>
					<div className="flex flex-col gap-y-1 py-1 justify-center items-center">
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsHypnotize
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsGear
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
						<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
							<BsCreditCard2Back
								size={16}
								onClick={handleCollapse}
								className="group-hover:text-white stroke-[0.5px] text-slate-500"
							/>
							<span className="sr-only">Open sidebar</span>
						</button>
					</div>
				</div>

				<div className="flex items-center gap-1 flex-col mb-5">
					{avatar ? (
						<Image
							src={avatar}
							alt="profile picture"
							width={100}
							height={100}
							className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-scale-200 hover:bg-scale-500 text-scale-900 hover:text-scale-1200  bg-scale-500 shadow-sm text-slate-500"
						/>
					) : (
						<BsPerson
							size={16}
							onClick={handleCollapse}
							className="p-2 hover:bg-dark-100 group-hover:text-white stroke-[0.5px] text-slate-500"
						/>
					)}
				</div>
			</aside>
			{!collapsed && (
				<div className="hide-scrollbar flex w-64 flex-col border-r border-dark-100">
					<div
						className="border-dark-100 flex max-h-12 items-center border-b px-6"
						style={{ "min-height": "3rem" }}
					>
						<h4 className="text-base font-poppins text-white">
							Your notes
						</h4>
					</div>
					<div
						className="flex-grow overflow-y-auto"
						style={{ "max-height": "calc(100vh - 96px)" }}
					>
						<div className="px-3 mx-4">Something</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SideMenu;
