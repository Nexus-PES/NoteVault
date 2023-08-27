import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const MenuButton = ({ children, links, ...props }) => {
	return (
		<Menu
			{...props}
			as="div"
			className="relative inline-block text-left"
		>
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-text-200 focus:bg-text-200 p-0.5 bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					{children}
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="z-50 text-xs font-poppins absolute right-0 mt-1 sm:mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-background border-stone-700 border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						{links.map((link) => (
							<Menu.Item key={link.label}>
								{({ active }) => (
									<button
										className={`${
											active
												? "bg-dark-100 text-secondary"
												: "text-white"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									>
										{/* {active ? (
												<BeakerIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											) : (
												<BeakerIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											)} */}
										{link.label}
									</button>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default MenuButton;
