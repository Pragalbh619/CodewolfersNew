import { Helmet } from "react-helmet-async";
import React from "react";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Jobs from "./components/Jobs";
import FresherJobs from "./components/FresherJobs";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Join Codewolfers | Web, App & Software Development Jobs</title>
        <meta name="description" content="Explore exciting career opportunities at Codewolfers. We are hiring talented developers, designers, and tech enthusiasts for web, app, and software development roles." />
        <meta name="keywords" content="careers, job openings, software development jobs, web development jobs, app development careers, fresher jobs, IT jobs" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Careers - Join Codewolfers | Web, App & Software Development Jobs" />
        <meta property="og:description" content="Join our team at Codewolfers! Apply for software development, web development, and app development jobs today." />
        <meta property="og:url" content="https://www.codewolfers.com/careers" />
      </Helmet>

      <Banner />
      <Description />
      <Jobs />
      <FresherJobs />
    </>
  );
};

export default Careers;
