import Hero from "../components/Hero";
import Comment from "../components/Comment";
import Features from "../components/Features";
import FAQ from "../components/FAQ";

const Home = () => {
	return (
		<div className="min-h-screen text-text-100 bg-background">
			<Hero />

			{/* Features */}
			<Features />


			{/* Comments */}
			<Comment />


      {/* FAQ */}
	    <FAQ />
	    <hr className="mt-40"/>
      <Footer/>
    </div>
  );
};

export default Home;
