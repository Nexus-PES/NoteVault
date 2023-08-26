"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SideMenu = () => {
	const [collapsed, setCollapsed] = useState(true);

	const handleCollapse = () => {
		setCollapsed(!collapsed);
		console.log(collapsed);
	};

	let ab = [1, 2, 3, 4, 5];
	return (
		<div className="w-auto flex h-auto">
			<div className="fixed border-e border-text-200 flex flex-col gap-y-4 w-16 py-6 h-full bg-dark-100 items-center">
					<button
						onClick={handleCollapse}
					>
					<Image
						src= "/images/logo.svg"
						alt="profile picture"
						width={100}
						height={100}
						className="h-9 w-9 sm:w-10 sm:h-10 rounded-full flex-wrap"
					/>
					</button>

					<Image
						src= "/images/profile.png"
						alt="profile picture"
						width={100}
						height={100}
						className="h-9 w-9 sm:w-10 sm:h-10 rounded-full flex-wrap"
					/>

			</div>
			{!collapsed && (
				<div className=" fixed ml-10 bg-dark-100 h-full w-52 px-5 py-7 space-y-2">
					<div className="">
						<p className="font-poppins text-white text-sm">
							Your Vault
						</p>
					</div>
					<div className="flex flex-col w-41 gap-2">
						{ab.map((item, i) => (
							<div className="flex flex-row gap-1" key={item.i}>
								<div className="w-2.5 h-2.5 shrink-0 self-center bg-secondary rounded-full"></div>
								<div className=" truncate">
									<p className="font-poppins truncate  text-white text-xs">
										fdsjfdskjf jdsnfjsdnf sdmcneuifhsdkcm
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SideMenu;
