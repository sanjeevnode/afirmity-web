const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full max-w-6xl py-6 border  px-6  md:px-10 min-[1200px]:px-0">
        <span
          className="text-6xl font-bold bg-clip-text text-transparent bg-cover bg-center"
          style={{ backgroundImage: "url(/Hero.jpg)" }}
        >
          {" "}
          Footer
        </span>
      </div>
    </div>
  );
};

export default Footer;
