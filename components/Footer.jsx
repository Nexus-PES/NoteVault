import React from "react";
import { footer } from "../data";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-dark-100 mt-20">
			<div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
				<nav
					className="flex flex-wrap justify-center -mx-5 -my-2"
					aria-label="Footer"
				>
					{footer.map((footer_link, i) => (
						<div
							className="px-5 py-2"
							key={footer_link.title}
						>
							<Link
								href={footer_link.link}
								className="text-sm text-gray-500 hover:text-secondary"
							>
								{footer_link.title}
							</Link>
						</div>
					))}
				</nav>
				<p className="mt-8 text-center">
					<span className="mx-auto mt-2 text-xs text-gray-500">
						Copyright
						<Link
							href="#"
							className="mx-2 text-secondary hover:text-gray-500 "
							rel="noopener noreferrer"
						>
							@NoteVault
						</Link>
						since 2023
					</span>
				</p>
			</div>
		</footer>
	);
}
