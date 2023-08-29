import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const production = true

const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: production ? process.env.GITHUB_ID : process.env.GITHUB_ID_DEV,
			clientSecret: production ? process.env.GITHUB_SECRET : process.env.GITHUB_SECRET_DEV,
		}),
	],
	secret: process.env.JWT_SECRET,
});

export { handler as GET, handler as POST };
// export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github"

// const handler = NextAuth({
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		}),
// 	],
// 	secret: process.env.NEXTAUTH_SECRET,
// 	callbacks: {
// 		async session({ session }) {
// 			// store the user id from MongoDB to session
// 			const sessionUser = await User.findOne({
// 				email: session.user.email,
// 			});
// 			session.user.id = sessionUser._id.toString();

// 			return session;
// 		},
// 		async signIn({ account, profile, user, credentials }) {
// 			try {
// 				await connectToDB();

// 				// check if user already exists
// 				const userExists = await User.findOne({ email: profile.email });

// 				// if not, create a new document and save user in MongoDB
// 				if (!userExists) {
// 					await User.create({
// 						email: profile.email,
// 						username: profile.name.replace(" ", "").toLowerCase(),
// 						image: profile.picture,
// 					});
// 				}

// 				return true;
// 			} catch (error) {
// 				console.log("Error checking if user exists: ", error.message);
// 				return false;
// 			}
// 		},
// 	},
// });

// export { handler as GET, handler as POST };
