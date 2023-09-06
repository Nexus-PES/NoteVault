// import React from "react";
import Link from "next/link";

const NotesNavbar = ({ username, paths = [], params = "/" }) => {
	return (
		<nav className="flex h-12 max-h-12 items-center justify-between py-2 pl-12 border-b border-dark-100 text-white text-xs">
			<ul className="flex items-center">
				<li>
					<Link
						href={`/${username.split(' ').join('')}`}
						className={`${
							params === username
								? "text-white"
								: "text-slate-400"
						} hover:text-white cursor-pointer px-2 py-1 text-xs focus:bg-transparent focus:outline-none`}
					>
						NoteVault
					</Link>
				</li>
				{paths.length > 0 &&
					paths.map((path, index) => (
						<>
							<li className="text-slate-400 font-xs hover:text-white">
								/
							</li>
							<li>
								<Link
									href={path.href}
									className="text-gray-1100 block px-2 py-1 text-xs leading-5 focus:bg-gray-100 focus:text-gray-900 focus:outline-none "
								>
									{path.title}
								</Link>
							</li>
						</>
					))}
			</ul>
		</nav>
	);
};

export default NotesNavbar;
