import Hero from "@/components/Hero";
import Comment from "@/components/Comment";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen text-text-100 bg-background">
      <Hero />

      {/* Features */}
      <Features />

	  <hr />
      {/* Comments */}
      <Comment />

	  <hr />

      {/* FAQ */}
	  <FAQ />
	  <hr />

    </div>
  );
};

export default Home;
