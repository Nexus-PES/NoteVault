import Provider from "../components/Provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Note Vault",
	description: "NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.",
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
