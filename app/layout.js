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
			<body className="bg-background">
				<Provider>
					{children}
					<Analytics />
				</Provider>
			</body>
		</html>
	);
}
