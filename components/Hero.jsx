import React from "react";
import Button from "./Button";
import Image from "next/image";
import iconic from "public/images/kybernetwork.svg";
import features from "../data";
import Comment from "../components/Comment";

const Hero = () => {
	return (
		<main className="container py-24 text-white flex flex-col justify-center">
			<div className="-space-y-2">
				<h1 className="text-center text-wrap-balance text-clamp-hero font-poppins font-semibold">
					A Simple way to
				</h1>
				<h1 className="text-center text-wrap-balance text-clamp-hero font-poppins font-semibold">
					create{" "}
					<span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
						Notes
					</span>
				</h1>
			</div>
			<p className="w-3/4 sm:h-4/5 ms:2/3 mx-auto text-xs sm:text-sm md:text-base text-center tracking-wide text-text-100 font-medium my-2">
				Capture, Create, Connect: Your Personal Note-Making Journey
			</p>
			<div className="flex justify-center my-9">
				<div className="flex gap-4 my-4 md:my-9 justify-center">
					<Button>Make Notes</Button>
					<Button type="glory">Join Us</Button>
				</div>
			</div>
			<br></br>
			<div className="flex justify-center h-[10vh] sm:h-[15vh] md:h-[20vh] max-h-[250px]">
				<h1 className="font-poppins flex items-center text-clamp-heading font-black">
					NoteVault
				</h1>
			</div>
			<br></br>
			<div className="grid grid-col-1 mt-[4rem]">
				<div className="font-poppins font-semibold  text-[2.16rem] ">
					Why <span className="text-[#E40000]">NoteVault</span>?
				</div>
			</div>
		</main>
	);
};

export default Hero;
