import React from "react";
import Button from "./Button";

const Hero = () => {
	return (
		<main className="container px-8 gap-3 py-24 text-white flex flex-col items-center">
			<div>
				<h1 className="text-center text-wrap-balance text-heading sm:leading-[64px] leading-9 font-poppins font-semibold">
					A Simple way to
				</h1>
				<h1 className="text-center text-wrap-balance text-heading sm:leading-[64px] leading-9 font-poppins font-semibold">
					create{" "}
					<span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
						Notes
					</span>
				</h1>
			</div>
			<p className="text-xs sm:text-sm md:text-base text-center tracking-wide text-text-100 font-medium">
				Capture, Create, Connect: Your Personal Note-Making Journey
			</p>
			<div className="flex gap-4 my-4 md:my-9">
				<Button>Make Notes</Button>
				<Button type="glory">Join Us</Button>
			</div>
		</main>
	);
};

export default Hero;
