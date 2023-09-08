import React from "react";

const Warning = ({ title, caption, children, onClick, ...props }) => {
	return (
		<div
			{...props}
			className="w-full h-full flex items-center justify-center text-white font-poppins"
		>
			<div className="flex h-full w-full items-center justify-center">
				<div className="flex space-x-4 rounded border border-dark-100 bg-dark-100 p-6 shadow-md">
					<div className="flex flex-col">
						<div className="w-auto sm:w-64 md:w-80 space-y-2 sm:space-y-4">
							<h5 className="text-sm sm:text-base">{title}</h5>
							<div className="flex flex-col space-y-2">
								<p className="text-xs sm:text-sm text-text-100">
									{caption}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<button className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-semibold ease-out duration-200 rounded-md transition-all outline-none outline-0 focus-visible:border-4 bg-secondary-600 border-slate-800 hover:bg-secondary-600/80 text-white  focus-visible:outline-white shadow-sm text-xs px-5 py-2">
									<button
										onClick={onClick}
										className="truncate"
									>
										{children}
									</button>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Warning;
