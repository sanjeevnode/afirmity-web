import Blog from "../content/Blog";
import InformationContent from "../content/InformationContent";
import MeetOurExperts from "../content/MeetOurExperts";
import OurServices from "../content/OurServices";
import PartnersInWorld from "../content/PartnersInWorld";
import PopularProjects from "../content/PopularProjects";
import RequestCall from "../content/RequestCall";
import Reviews from "../content/Reviews";
import SectionOne from "../content/SectionOne";
import SectionTwo from "../content/SectionTwo";
const Content = () => {
  return (
    <>
      <SectionOne />
      {/* What do we do */}
      <SectionTwo />
      {/* Our Services */}
      <OurServices />
      {/* Information */}
      <InformationContent />
      {/* Partners In World */}
      <PartnersInWorld />
      {/* meet or expert */}
      <MeetOurExperts />
      {/* Popular Projects */}
      <PopularProjects />
      {/* Request a call */}
      <RequestCall />
      {/* Reviews */}
      <Reviews />
      {/* Blog */}
      <Blog />
    </>
  );
};

export default Content;
