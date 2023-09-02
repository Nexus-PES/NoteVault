export default function manifest() {
	return {
		name: "NoteVault App",
		short_name: "Next.js App",
		description: "NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#fff",
		purpose: "any maskable",
		icons: [
			{
				src: "/icons/icon-48.png",
				sizes: "48x48",
				type: "image/png",
			},
			{
				src: "/icons/icon-72.png",
				sizes: "72x72",
				type: "image/png",
			},
			{
				src: "/icons/icon-96.png",
				sizes: "96x96",
				type: "image/png",
			},
			{
				src: "/icons/icon-120.png",
				sizes: "120-120",
				type: "image/png",
			},
			{
				src: "/icons/icon-128.png",
				sizes: "128x128",
				type: "image/png",
			},
			{
				src: "/icons/icon-144.png",
				sizes: "144x144",
				type: "image/png",
			},
			{
				src: "/icons/icon-180.png",
				sizes: "180x180",
				type: "image/png",
			},
			{
				src: "/icons/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icons/icon-384.png",
				sizes: "384x384",
				type: "image/png",
			},
			{
				src: "/icons/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
