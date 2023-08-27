import React from "react";
import Button from "./Button";
import Image from "next/image";
import iconic from "public/images/kybernetwork.svg";
import features from "../data";
import Comment from "../components/Comment";

const Hero = () => {
	return (
		<main className="container pt-24 text-white flex flex-col justify-center">
			<div className="-space-y-2">
				<h1 className="text-center text-wrap-balance text-clamp-hero font-poppins font-semibold">
					A Simple way to
				</h1>
				<h1 className="text-center text-wrap-balance text-clamp-hero font-poppins font-semibold">
					create{" "}
					<span className="mx-auto text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
						Notes
					</span>
				</h1>
			</div>
			<p className="w-3/4 sm:h-4/5 ms:2/3 mx-auto text-base text-center tracking-wide text-text-100 font-medium my-2">
				<span className="block leading-4 whitespace-nowrap">
					Capture, Create, Connect
				</span>
				<span className="whitespace-nowrap text-sm sm:text-base">
					Your Personal Note-Making Journey
				</span>
			</p>
			<div className="flex gap-4 mt-6 mb-8 sm:mt-6 sm:mb-12 md:mt-9 md:mb-16 justify-center">
				<Button href="/Sarang">Make Notes</Button>
				<Button
					href="/Sarang Kumar"
					type="glory"
				>
					Join Us
				</Button>
			</div>
			<br></br>
			<div className="flex justify-center h-[10vh] sm:h-[15vh] md:h-[20vh] max-h-[250px]">
				<h1 className="font-poppins flex items-center text-clamp-heading font-black">
					NoteVault
				</h1>
			</div>
		</main>
	);
};

export default Hero;
