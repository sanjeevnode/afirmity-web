import Content from "./Content";
import Hero from "../shared/Hero";

const Home = () => {
  return (
    <main className="w-full  flex flex-col relative">
      <Hero />
      <Content />
    </main>
  );
};

export default Home;
