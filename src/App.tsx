import Content from "./components/shared/Content";
import Footer from "./components/shared/Footer";
import Hero from "./components/shared/Hero";

import Navbar from "./components/shared/Navbar";
import TopAddress from "./components/shared/TopAddress";

function App() {
  return (
    <main className="w-screen  flex flex-col relative">
      <TopAddress />
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
