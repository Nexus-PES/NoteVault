import Hero from "../components/Hero";
import Comment from "../components/Comment";
import Features from "../components/Features";
import FAQ from "../components/FAQ";

const Home = () => {
<<<<<<< HEAD
  return (
    <div className="min-h-screen text-text-100 bg-background mx-5">
      <Hero />
=======
	return (
		<div className="min-h-screen text-text-100 bg-background">
			<Hero />
>>>>>>> fc5a7c117a70aecdc4eb5d405a6b29f97629ef1e

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
