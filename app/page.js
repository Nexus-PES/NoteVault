import Hero from "../components/Hero";
import Comment from "../components/Comment";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="min-h-screen text-text-100 bg-background">
			<main className="mx-8 sm:mx-20 md:mx-48  flex gap-y-28 flex-col">
				<Hero />

				{/* Features */}
				<Features />

				{/* Comments */}
				<Comment />

				{/* FAQ */}
				<FAQ />
			</main>

			<Footer />
		</div>
	);
};

export default Home;
