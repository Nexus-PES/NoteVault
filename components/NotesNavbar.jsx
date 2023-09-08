"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotesNavbar = ({
	user,
	paths = [],
	loading = false,
	main = false,
	className,
	...props
}) => {
	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		const sidebarOpen = localStorage.getItem("sidebar");
		setShowSidebar(JSON.parse(sidebarOpen));
	}, []);

	console.log(user)

	return (
		<nav
			{...props}
			className={`${
				showSidebar ? "" : "px-2"
			} pl-12 pr-2 flex h-12 max-h-12 items-center justify-between py-2 border-b border-dark-100 text-white text-xs ${className}`}
		>
			<ul className="flex items-center justify-center">
				{loading ? (
					<li className="hover:text-white cursor-pointer px-2 py-1 text-xs focus:bg-transparent focus:outline-none text-slate">
						Loading...
					</li>
				) : (
					<li>
						<Link
							href={`/${user.email.split("@")[0]}`}
							className={`${
								main ? "text-white" : "text-slate-400"
							} hover:text-white cursor-pointer px-2 py-1 text-xs focus:bg-transparent focus:outline-none`}
						>
							NoteVault
						</Link>
					</li>
				)}

				{paths.map((path) => (
					<ul key={path.id} classname="w-40 flex items-center justify-center bg-red-500">
						<li className="inline-bloack file:text-slate-400 font-xs hover:text-white">
							/
						</li>
						<li>
							<Link
								href={path.href}
								className="inline-bloack file:text-gray-100 block px-2 py-1 text-xs leading-5 hover:text-white"
							>
								{path.title}
							</Link>
						</li>
					</ul>
				))}
				{/* pathname.split('/').map((path, index) => (
						<span key={index}>
							<li className="text-slate-400 font-xs hover:text-white">
								/
							</li>
							<li>
								<Link
									href={path.href}
									className="truncate text-gray-100 block px-2 py-1 text-xs leading-5 focus:bg-gray-100 focus:outline-none "
								>
									{path.title}
								</Link>
							</li>
						</span> */}
			</ul>
		</nav>
	);
};

export default NotesNavbar;
