"use client";
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
			<div className="fixed border-e flex flex-col r-0 w-10 py-6  h-full bg-dark-100 items-center">
				<div className="rounded-full w-7 h-7 bg-secondary my-1">
					<button
						onClick={handleCollapse}
						className="w-7 h-7"
					></button>
				</div>

				<div className="rounded-full bg-white w-7 h-7 my-1 ">
					{/* <img
						src=""
						alt=""
					/> */}
				</div>
			</div>
			{!collapsed && (
				<div className=" fixed ml-10 bg-dark-100 h-full w-52 px-5 py-7 space-y-2">
					<div className="">
						<p className="font-poppins text-white text-sm">
							Your Vault
						</p>
					</div>
					<div className="flex flex-col w-41 gap-2">
						{/* {ab.map(() => (
							<div className="flex flex-row gap-1 ">
								<div className="w-2.5 h-2.5 shrink-0 self-center bg-secondary rounded-full"></div>
								<div className=" truncate">
									<p className="font-poppins truncate  text-white text-xs">
										fdsjfdskjf jdsnfjsdnf sdmcneuifhsdkcm
									</p>
								</div>
							</div>
						))} */}
					</div>
				</div>
			)}
		</div>
	);
};

export default SideMenu;
