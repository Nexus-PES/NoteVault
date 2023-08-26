import { features } from "../data";
import Image from "next/image";
import React from "react";
import iconic from "public/images/kybernetwork.svg";
const Features = () => {
	return (
		<div>
			<div className="grid grid-col-1 mb-8 sm:mb-12 md:mb-14">
				<div className="font-poppins font-semibold text-clamp-subheading">
					Why <span className="text-primary">NoteVault</span>?
				</div>
			</div>
			<div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
				{features.map((comment) => (
					<div
						className="flex gap-5 flex-[1] border-stone-800 border"
						key={comment.id}
					>
						<div className="rounded-md p-4 hover:bg-dark-100">
							<div className="flex gap-2">
								<span className="bg-primary text-primary w-1 h-6">
									.
								</span>
								<Image
									src={iconic}
									alt="feature icon"
									className="self-start"
								/>
								<h2 className="self-start font-poppins w-[14rem]">
									{comment.title}
								</h2>
							</div>
							<p className="text-xs ml-4 mt-[0.5rem] font-poppins">
								{comment.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
