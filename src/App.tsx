import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/Pages/AboutUs";
import Team from "./components/Pages/Team";
import TeamDetails from "./components/Pages/TeamDetails";
import ContactUs from "./components/Pages/ContactUs";
import FaqPage from "./components/Pages/FaqPage";
import LatestProjects from "./components/Projects/LatestProjects";
import ProjectDetails from "./components/Projects/ProjectDetails";

import ServiceDetails from "./components/Services/ServiceDetails";
import Blog from "./components/Blog/Blog";
import TopAddress from "./components/shared/TopAddress";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar/NavBar";
import Error from "./components/shared/Error";
import OurServices from "./components/Services/OurServices";
import ScrollToTop from "./lib/ScrollToTop";

function App() {
  return (
    <main className="w-screen flex flex-col !scroll-smooth">
      <TopAddress />
      <NavBar />
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/pages/about" element={<AboutUs />} />
        <Route path="/pages/team" element={<Team />} />
        <Route path="/pages/team-details" element={<TeamDetails />} />
        <Route path="/pages/contact" element={<ContactUs />} />
        <Route path="/pages/faq" element={<FaqPage />} />

        {/* Projects */}
        <Route path="/projects/latest-projects" element={<LatestProjects />} />
        <Route path="/projects/project-details" element={<ProjectDetails />} />

        {/* Services */}
        <Route path="/services/our-services" element={<OurServices />} />
        <Route path="/services/service-details" element={<ServiceDetails />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        {/* Contact */}
        <Route path="/pages/contact" element={<ContactUs />} />

        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
