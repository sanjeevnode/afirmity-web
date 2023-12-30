import { Check, ChevronRight, HomeIcon } from "lucide-react";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center ">
      <div
        className="min-w-full w-full h-[60vh] bg-center bg-cover flex justify-center items-center relative"
        style={{
          backgroundImage: "url(/text-image.jpeg)",
          backgroundSize: "cover",
        }}
      >
        {/* Top Image */}
        <div className="absolute inset-0 w-full h-full bg-black/40" />
        <div className="flex flex-col z-[5]">
          <span className="text-white text-5xl font-bold">Project Details</span>
          <div className="flex justify-center items-center mt-4">
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Home</span>
            <ChevronRight className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Project</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col py-20 px-6  md:px-10  min-[1200px]:px-0 gap-8 ">
          <img src="/project-detail.jpeg" className="w-full h-full" alt="" />

          {/* data */}
          <div className="w-full flex min-[996px]:flex-row flex-col gap-8 justify-start">
            {/* buisness data and solutons */}
            <div className="w-full min-[996px]:w-2/3  flex flex-col gap-8">
              <span className="text-black font-bold text-3xl">
                Business Planing & Solution
              </span>
              <p className="w-full text-slate-500">
                Netus lorem rutrum arcu dignissim at sit morbi phasellus
                nascetur eget urna potenti cum vestibulum cras. Tempor nonummy
                metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula
                pellentesque cras posuere tempor facilisi habitant lectus rutrum
                pede quisque hendrerit parturient posuere mauris ad elementum
                fringilla facilisi volutpat fusce pharetra felis sapien varius
                quisque class convallis praesent est sollicitudin donec nulla
                venenatis, cursus fermentum netus posuere sociis porta risus
                habitant malesuada nulla habitasse hymenaeos.
              </p>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* diplay features */}
                <div className=" relative w-full pl-8 flex flex-col gap-6">
                  <span className="text-xl font-bold text-black">
                    Mobile Optimization
                  </span>
                  <p className="w-full text-slate-500">
                    See general few civilly amiable pleased account carried.
                    Excellence projecting is devonsh.
                  </p>
                  <span className="p-[2px] rounded-full bg-primary absolute top-1 left-0">
                    <Check className="w-4 h-4  font-bold text-white" />
                  </span>
                </div>

                <div className=" relative w-full pl-8 flex flex-col gap-6">
                  <span className="text-xl font-bold text-black">
                    Marketing Automation
                  </span>
                  <p className="w-full text-slate-500">
                    Account carried. Excellence projecting is devonshire
                    dispatched remarkably.
                  </p>
                  <span className="p-[2px] rounded-full bg-primary absolute top-1 left-0">
                    <Check className="w-4 h-4  font-bold text-white" />
                  </span>
                </div>

                <div className=" relative w-full pl-8 flex flex-col gap-6">
                  <span className="text-xl font-bold text-black">
                    Robust Analytics
                  </span>
                  <p className="w-full text-slate-500">
                    Civilly amiable pleased account carried. Excellence
                    projecting is devonshire dispatched.
                  </p>
                  <span className="p-[2px] rounded-full bg-primary absolute top-1 left-0">
                    <Check className="w-4 h-4  font-bold text-white" />
                  </span>
                </div>

                <div className=" relative w-full pl-8 flex flex-col gap-6">
                  <span className="text-xl font-bold text-black">
                    Third-party Integrations
                  </span>
                  <p className="w-full text-slate-500">
                    Amiable pleased account carried. Excellence projecting is
                    devonshire dispatched remarkably.
                  </p>
                  <span className="p-[2px] rounded-full bg-primary absolute top-1 left-0">
                    <Check className="w-4 h-4  font-bold text-white" />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full min-[996px]:w-1/3 flex flex-col gap-4  p-10 border-t-4 border-primary h-fit bg-[#f7f7f7]">
              <span className="text-primary text-2xl">Project Info</span>

              <div className="flex flex-col  ">
                <span className="text-black font-bold">Client</span>
                <span className="text-slate-500">
                  themeforest.validthemes.com
                </span>
              </div>

              <div className="flex flex-col  ">
                <span className="text-black font-bold">Date</span>
                <span className="text-slate-500">25 February, 2022</span>
              </div>

              <div className="flex flex-col  ">
                <span className="text-black font-bold">Address</span>
                <span className="text-slate-500">
                  1401, 21st Street STE R4569, California
                </span>
              </div>

              <div className="flex w-full gap-4 justify-start items-center mt-4">
                <div className="rounded-full p-3 bg-black team-details-share-shadow">
                  <FaFacebook className="w-4 h-4 text-white" />
                </div>
                <div className="rounded-full p-3 bg-black team-details-share-shadow">
                  <FaTwitter className="w-4 h-4 text-white" />
                </div>
                <div className="rounded-full p-3 bg-black team-details-share-shadow">
                  <FaYoutube className="w-4 h-4 text-white" />
                </div>
                <div className="rounded-full p-3 bg-black team-details-share-shadow">
                  <FaPinterest className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* desc */}
          <p className="w-full text-slate-500">
            Give lady of they such they sure it. Me contained explained my
            education. Vulgar as hearts by garret. Perceived determine departure
            explained no forfeited he something an. Contrasted dissimilar get
            joy you instrument out reasonably. Again keeps at no meant stuff. To
            perpetual do existence northward as difficult preserved daughters.
            Continued at up to zealously necessary breakfast. Surrounded sir
            motionless she end literature. Gay direction neglected but supported
            yet her. Facilisis inceptos nec, potenti nostra aenean lacinia
            varius semper ant nullam nulla primis placerat facilisis. Netus
            lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget
            urna potenti cum vestibulum cras. Tempor nonummy metus lobortis.
            Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras
            posuere tempor facilisi habitant lectus rutrum pede quisque
            hendrerit parturient posuere mauris ad elementum fringilla facilisi
            volutpat fusce pharetra felis sapien varius quisque class convallis
            praesent est sollicitudin donec nulla venenatis, cursus fermentum
            netus posuere sociis porta risus habitant malesuada nulla habitasse
            hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center  overflow-hidden">
            <img
              src="/latest-project2.jpeg"
              className="w-full md:w-1/2 "
              alt=""
            />
            <img
              src="/latest-project3.jpeg"
              className="w-full md:w-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
