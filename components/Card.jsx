import React from "react";

const Card = ({ title, createdDate, lastModifiedDate }) => {
	const currentDate = new Date();
	return (
		<div class="box-border p-5 transition hover:border-stone-500  rounded text-white bg-dark-100 flex flex-col gap-2">
			<div className="flex justify-between items-center">
				<p className="text-white text-sm font-poppins font-medium">
					{title}
				</p>
				i
			</div>
			<p className="text-xs text-text-100">
				{createdDate} → {lastModifiedDate}
			</p>
		</div>
	);
};
export default Card;
