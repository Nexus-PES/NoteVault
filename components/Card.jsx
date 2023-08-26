import Image from "next/image";
import React from "react";

const Card = ({ title, createdDate, lastModifiedDate }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		alert("clicked");
	};
	return (
		<div class="box-border p-5 transition hover:border-stone-500  rounded text-white bg-dark-100 flex flex-col gap-2">
			<div className="flex justify-between items-center">
				<p className="text-white text-sm font-poppins font-medium capitalize">
					{title}
				</p>
				<button onClick={() => handleClick(e)}>
					<Image
						src="/images/threeDots.svg"
						alt="options"
						className=""
						height={20}
						width={5}
					/>
				</button>
			</div>
			<p className="text-xs text-text-100">
				{createdDate} → {lastModifiedDate}
			</p>
		</div>
	);
};
export default Card;
