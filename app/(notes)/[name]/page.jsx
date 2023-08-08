import React from "react";

const UserPage = ({ params }) => {
	return (
		<div>
			<h1 className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
				Hi {params.name}
			</h1>
		</div>
	);
};

export default UserPage;
