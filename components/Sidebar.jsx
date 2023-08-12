"use client";
import React, { useState } from "react";
import {
	Sidebar,
	Menu,
	MenuItem,
} from "react-pro-sidebar";

const SideMenu = () => {
	const [collapsed, setCollapsed] =
		useState(true);

	const handleCollapse = () => {
		setCollapsed(!collapsed);
		console.log(collapsed)
	};

	return (<div className="w-auto flex h-auto">
		<div className="fixed flex flex-col r-0 w-10 py-6 px-1 h-full bg-dark-100"
			style={{
				display: "flex",
				height: "10%",
			}}
		>

			<div className="rounded-full w-7 h-7 bg-secondary">
			<button  onClick={handleCollapse} className="w-7 h-7"></button>
			</div>


		</div>
			{!collapsed &&
			<div className=" fixed ml-10 px-2 bg-dark-100 h-full w-52 ">
			
			
			</div>}
		</div>
	)
};

export default SideMenu;
