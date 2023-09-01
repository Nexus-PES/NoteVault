import Provider from "../components/Provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Note Vault",
	description: "A Simple way to create Notes",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="manifest"
				href="../manifest.json"
			/>
			<link
				rel="apple-touch-icon"
				href="/icons/icon-48.png"
			></link>
			<meta
				name="theme-color"
				content="#fff"
			/>
			<body className="bg-background">
				<Provider>
					{children}
					<Analytics />
				</Provider>
			</body>
		</html>
	);
}
