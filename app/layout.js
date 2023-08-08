import "./globals.css";

export const metadata = {
	title: "Note Vault",
	description: "A Simple way to create Notes",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-background">{children}</body>
		</html>
	);
}
