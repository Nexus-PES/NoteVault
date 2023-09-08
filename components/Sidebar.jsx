"use client";
import {
	BsCalendar3Event,
	BsColumnsGap,
	BsCreditCard2Back,
	BsCollection,
	BsGear,
	BsHypnotize,
	BsRocketTakeoff,
	BsShare,
	BsLayoutSidebarInset,
	BsLayoutSidebar,
} from "react-icons/bs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SkeletonProfile } from "./Skeleton";

const SideMenu = ({ className }) => {
	const { data: session, status } = useSession();
	const [collapsed, setCollapsed] = useState(true);
	const [showSidebar, setShowSidebar] = useState(true);

	const handleCollapse = () => {
		setCollapsed(!collapsed);
	};

	let avatar;
	if (session) {
		avatar = session.user.image;
	}

	useEffect(() => {
		setShowSidebar(JSON.parse(localStorage.getItem("sidebar")));
		// console.log(
		// 	JSON.parse(
		// 		localStorage.getItem("sidebar"),
		// 		typeof JSON.parse(localStorage.getItem("sidebar"))
		// 	)
		// );
	}, []);

	useEffect(() => {
		localStorage.setItem("sidebar", showSidebar);
	}, [showSidebar]);

	return (
		<>
			<button
				className={` ${
					showSidebar && "hidden"
				} absolute top-1 left-2 transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm`}
			>
				<BsLayoutSidebarInset
					size={16}
					onClick={() => setShowSidebar(true)}
					className="group-hover:text-white stroke-[0.5px] text-slate-500"
				/>
				<span className="sr-only">Open sidebar</span>
			</button>
			<aside
				className={`${
					showSidebar ? "p-2" : "basis-0 p-0"
				} flex w-16 flex-col justify-between overflow-y-hidden border-r border-dark-100 h-[100svh] ${className}`}
			>
				<div className="flex items-center justify-center flex-col my-2 mx-1 divide-y divide-dark-100">
					<div className="flex flex-col gap-y-2 py-1 justify-center items-center">
						<Link href="/">
							<Image
								src="/images/logo.svg"
								alt="profile picture"
								width={100}
								height={100}
								className="h-8 w-8 rounded-full flex-wrap mb-3"
							/>
						</Link>
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsLayoutSidebar
									size={16}
									onClick={() => setShowSidebar(false)}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
					</div>
					<div className="flex flex-col gap-y-2 py-1 justify-center items-center">
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsCalendar3Event
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}

						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsColumnsGap
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
					</div>
					<div className="flex flex-col gap-y-2 py-1 justify-center items-center">
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsCollection
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsRocketTakeoff
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsShare
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
					</div>
					<div className="flex flex-col gap-y-2 py-1 justify-center items-center">
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsHypnotize
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsGear
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
						{status === "loading" ? (
							<SkeletonProfile />
						) : (
							<button className="transition-colors duration-200 flex group items-center justify-center h-10 w-10 rounded hover:bg-dark-100 shadow-sm">
								<BsCreditCard2Back
									size={16}
									onClick={handleCollapse}
									className="group-hover:text-white stroke-[0.5px] text-slate-500"
								/>
								<span className="sr-only">Open sidebar</span>
							</button>
						)}
					</div>
				</div>

				<div className="flex items-center flex-col justify-center mb-5">
					{status === "authenticated" ? (
						<Image
							src={avatar}
							alt="profile picture"
							width={100}
							height={100}
							className="rounded-full transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded bg-scale-200 hover:bg-scale-500 text-scale-900 hover:text-scale-1200  bg-scale-500 shadow-sm text-slate-500"
						/>
					) : (
						<SkeletonProfile />
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
						style={{ maxHeight: "calc(100vh - 96px)" }}
					>
						<div className="px-3 mx-4">Something</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SideMenu;
