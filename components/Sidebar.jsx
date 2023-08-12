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
	};

	return (
		<div className="fixed r-0 h-full bg-dark-100"
			style={{
				display: "flex",
				height: "10%",
			}}
		>
			<Sidebar
				collapsed={collapsed}
			>
				<Menu>
					<button
						onClick={
							handleCollapse
						}
					>
						{collapsed
							? "Expand"
							: "Collapse"}
					</button>

					{collapsed ? null : (
						<>
							<MenuItem>
								Item 1
							</MenuItem>
							<MenuItem>
								Item 2
							</MenuItem>
						</>
					)}
				</Menu>
			</Sidebar>
		</div>
	);
};

export default SideMenu;
