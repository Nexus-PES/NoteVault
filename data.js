import { v4 } from "uuid";

export const features = [
	{
		title: "Features That Empowers",
		description:
			"Seamlessly create and edit notes with our user-friendly interface. Focus on your ideas while we take care of the formatting.",
	},
	{
		title: "Your Ideas, Your Style",
		description:
			"Personalize your note-taking experience with customizable themes and layouts. Make it truly yours.",
	},
	{
		title: "Security and Privacy",
		description:
			"We take your privacy seriously. Your notes are yours alone, and you decide who you share them with.",
	},
	{
		title: "Start Your Journey",
		description:
			"Join thousands of users who are already revolutionizing their note-taking experience with YourNoteHub.",
	},
];

export const comments = [
	{
		id: 1,
		imageUrl: "/images/profile.png",
		name: "EmilyD",
		comment:
			"NoteVault has revolutionized my note-taking experience. The bidirectional linking is a game-changer for connecting my thoughts.",
		rating: 5,
	},
	{
		id: 2,
		name: "AlexNoteTaker",
		imageUrl: "/images/profile.png",
		comment:
			"Markdown support in NoteVault makes formatting a breeze. It's my go-to platform for organized notekeeping.",
		rating: 4,
	},
	{
		id: 3,
		name: "IdeasExplorer",
		imageUrl: "/images/profile.png",
		comment:
			"I'm eagerly waiting for the collaboration feature to be added. NoteVault is already fantastic for managing my ideas.",
		rating: 4,
	},
	{
		id: 4,
		name: "PrivacyFirst",
		imageUrl: "/images/profile.png",
		comment:
			"The emphasis on data security in NoteVault is a major plus. I feel confident in storing sensitive information here.",
		rating: 5,
	},
	{
		id: 5,
		name: "CreativeWriter123",
		imageUrl: "/images/profile.png",
		comment:
			"NoteVault's bidirectional linking helps me see the bigger picture of my writing projects. It's a writer's dream tool.",
		rating: 5,
	},
];

export const faq = [
	{
		id: 1,
		title: "What is NoteVault?",
		desc: "NoteVault is an innovative note-taking platform designed to enhance your organization and idea connections.",
	},
	{
		id: 2,
		title: "How do I use bidirectional linking?",
		desc: "Bidirectional linking helps you create connections between notes. Links work both ways, aiding idea exploration.",
	},
	{
		id: 3,
		title: "Can I access my notes offline?",
		desc: "Yes, NoteVault supports offline access. Any changes you make offline will sync when you're back online.",
	},
	{
		id: 4,
		title: "Is my data secure on NoteVault?",
		desc: "Absolutely. We prioritize data security and use encryption to protect your notes and privacy.",
	},
	{
		id: 5,
		title: "What formatting options does NoteVault offer?",
		desc: "NoteVault supports Markdown formatting, allowing you to style your notes with simple syntax.",
	},
	{
		id: 6,
		title: "Can I categorize my notes?",
		desc: "Yes, you can categorize notes using tags and customizable organization features.",
	},
	{
		id: 7,
		title: "Is collaboration supported?",
		desc: "Collaboration is on the way! Soon, you'll collaborate with others on specific notes or projects.",
	},
	{
		id: 8,
		title: "How can I import/export my notes?",
		desc: "NoteVault offers import and export options, making migration and backup simple.",
	},
	{
		id: 9,
		title: "What is the Graph View?",
		desc: "The Graph View visually represents note connections, helping you visualize relationships between ideas.",
	},
	{
		id: 10,
		title: "Are there keyboard shortcuts?",
		desc: "Yes, NoteVault provides keyboard shortcuts for efficient navigation and actions.",
	},
	{
		id: 11,
		title: "Can I customize the theme?",
		desc: "Absolutely! NoteVault offers customizable themes to personalize your note-taking environment.",
	},
	{
		id: 12,
		title: "How does NoteVault ensure privacy?",
		desc: "We follow industry-standard security practices to ensure your data remains private and secure.",
	},
	{
		id: 13,
		title: "Is offline access available?",
		desc: "Yes, NoteVault lets you access your notes even when you're offline.",
	},
	{
		id: 14,
		title: "What is Markdown?",
		desc: "Markdown is a simple markup language supported by NoteVault for text formatting.",
	},
	{
		id: 15,
		title: "When can I expect new features?",
		desc: "We're continually working to improve NoteVault. Expect exciting updates and new features regularly.",
	},
];

export const footer = [
	{
		title: "Next.js",
		link: "#",
	},
	{
		title: "Remix",
		link: "#",
	},
	{
		title: "Svelte",
		link: "#",
	},
	{
		title: "Tailwind",
		link: "#",
	},
	{
		title: "React",
		link: "#",
	},
	{
		title: "Contact",
		link: "#",
	},
];

export const notesData = [
	{
		id: v4(),
		title: "Welcome to NoteVault 👋",
		createdDate: new Date(),
		lastModifiedDate: new Date(),
		content: `# Welcome to [NoteVault](https://notevault.vercel.app) Markdown Notepad


	
![Note Vault Logo](https://github.com/Nexus-PES/NoteVault/assets/86056181/49cbfd6c-61ad-42ba-bbd3-308604fc73de "Note Vault Logo")


> NoteVault is your go-to platform for creating and managing markdown notes with ease. Whether you're a seasoned markdown pro or just getting started, NoteVault simplifies the process of taking and organizing your notes, all while providing a seamless markdown preview feature. With NoteVault, your notes come to life as you write, making it effortless to create beautifully formatted documents. 

## Key Features of NoteVault

### 1. **Real-time Markdown Preview**
   - Instantly visualize how your markdown text will appear, allowing you to catch formatting errors on the fly.
   
### 2. **Effortless Organization**
   - Create, edit, and categorize your notes with a simple, intuitive interface.
   
### 3. **Collaboration Made Easy**
   - Collaborate with others in real-time on your markdown documents, ensuring seamless teamwork and document version control.

### 4. **Export and Share**
   - Export your markdown notes in various formats, including PDF, HTML, and plain text, and share them effortlessly with your colleagues or friends.

### 5. **Custom Themes**
   - Personalize your writing experience with customizable themes, making your notepad as unique as your content.

### 6. **Cross-Platform Compatibility**
   - Access your notes from anywhere, whether it's on your desktop, tablet, or smartphone, thanks to NoteVault's cloud-based platform.

### 7. **Security and Privacy**
   - Rest assured knowing your notes are secure with encryption and user-friendly privacy settings.

Get ready to supercharge your markdown writing experience with NoteVault! Start creating, formatting, and organizing your notes effortlessly today. Whether you're a student, writer, developer, or anyone who loves markdown, NoteVault has you covered. Happy writing!`,
	},
];
