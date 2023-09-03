const layout = ({ children }) => {
	return (
		<div
			style={{
				height: `calc(100vh - 0px); max-height: calc(100vh - 0px)`,
			}}
		>
			<main className="flex h-full">{children}</main>
		</div>
	);
};

export default layout;
