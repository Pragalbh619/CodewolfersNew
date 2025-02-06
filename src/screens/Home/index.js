// import { Helmet } from "react-helmet-async";
// import React from "react";
// import Hero from "./components/Hero";
// import Services from "../../components/Services";
// import AboutUs from "./components/AboutUs";
// import Detail from "./components/Detail";
// import Testimonials from "./components/Testimonials";
// import RightTeam from "./components/RightTeam";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Codewolfers - Best Web, App & Software Development Company</title>
//         <meta name="description" content="Codewolfers is a leading software company providing expert web development, mobile apps, and custom software solutions. Get your project done with us!" />
//         <meta name="keywords" content="web development, app development, software development, MERN stack, custom software, hire developers, Codewolfers" />
//         <meta name="author" content="Codewolfers" />
//         <meta property="og:title" content="Codewolfers - Best Web, App & Software Development Company" />
//         <meta property="og:description" content="Get expert web, app, and software development services from Codewolfers. Contact us today!" />
//         <meta property="og:url" content="https://www.codewolfers.com" />
//       </Helmet>

//       <Hero />
//       <Detail />
//       <Services />

//       <div className="relative w-full">
//         <RightTeam />
//       </div>
//       <Testimonials />
//       <AboutUs />
//     </>
//   );
// };

// export default Home;






import { Helmet } from "react-helmet-async";
import React from "react";
import Hero from "./components/Hero";
import Services from "../../components/Services";
import AboutUs from "./components/AboutUs";
import Detail from "./components/Detail";
import Testimonials from "./components/Testimonials";
import RightTeam from "./components/RightTeam";
import { cwImg } from "../../assets/MediaCall";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Codewolfers - Best Web, App & Software Development Company</title>
        <meta name="description" content="Codewolfers is a leading software company providing expert web development, mobile apps, and custom software solutions. Get your project done with us!" />
        <meta name="keywords" content="web development, app development, software development, MERN stack, custom software, hire developers, Codewolfers" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Codewolfers - Best Web, App & Software Development Company" />
        <meta property="og:description" content="Get expert web, app, and software development services from Codewolfers. Contact us today!" />
        <meta property="og:url" content="https://www.codewolfers.com" />
      </Helmet>

      <Hero />
      <Detail />
      <div
      //  bg-cover bg-center bg-no-repeat
        className="relative w-full min-h-screen"
        style={{ backgroundImage: `url(${cwImg.mainbg1})` }}
      >
        <Services />

        <div className="relative w-full">
          <RightTeam />
        </div>
      </div>
      <Testimonials />
      <AboutUs />
    </>
  );
};

export default Home;

