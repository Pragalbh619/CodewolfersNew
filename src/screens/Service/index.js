// import React from "react";
// import OurServices from "./components/OurServices";
// import Services from "../../components/Services";


// const Service = () => {
//   return (
//     <>
     
//       <OurServices />
//       <Services />
     
//     </>
//   );
// };

// export default Service;



import { Helmet } from "react-helmet-async";
import React from "react";
import OurServices from "./components/OurServices";
import Services from "../../components/Services";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Codewolfers | Web, App & Software Development</title>
        <meta name="description" content="Explore the services offered by Codewolfers, including web development, mobile apps, and custom software development solutions tailored to your business needs." />
        <meta name="keywords" content="web development, app development, software solutions, Codewolfers services, custom software, IT services" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Our Services - Codewolfers | Web, App & Software Development" />
        <meta property="og:description" content="Discover the expert services provided by Codewolfers in web development, mobile apps, and custom software solutions for businesses of all sizes." />
        <meta property="og:url" content="https://www.codewolfers.com/services" />
      </Helmet>

      <OurServices />
      <Services />
    </>
  );
};

export default Service;
