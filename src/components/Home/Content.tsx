import Blog from "../shared/content/Blog";
import InformationContent from "../shared/content/InformationContent";
import MeetOurExperts from "../shared/content/MeetOurExperts";
import OurProcess from "../shared/content/OurProcess";
import PartnersInWorld from "../shared/content/PartnersInWorld";
import PopularProjects from "../shared/content/PopularProjects";
import RequestCall from "../shared/content/RequestCall";
import Reviews from "../shared/content/Reviews";
import SectionOne from "../shared/content/SectionOne";
import SectionTwo from "../shared/content/SectionTwo";
import ShowCase from "../shared/content/ShowCase";
const Content = () => {
  return (
    <>
      <SectionOne />
      {/* What do we do */}
      <SectionTwo />
      {/* Our Services */}
      <OurProcess />
      {/* Information */}
      <InformationContent />
      {/* Show Case */}
      <ShowCase/>
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
