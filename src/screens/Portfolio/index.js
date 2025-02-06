import { Helmet } from "react-helmet-async";
import React from "react";
import Projects from "./components/Projects";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio - Codewolfers | Web & App Development Projects</title>
        <meta name="description" content="Explore our portfolio of successful web development, mobile app development, and custom software projects delivered by Codewolfers." />
        <meta name="keywords" content="portfolio, projects, web development, app development, software development, Codewolfers, custom solutions" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Our Portfolio - Codewolfers | Web & App Development Projects" />
        <meta property="og:description" content="Browse our portfolio of completed projects in web development, mobile app development, and custom software solutions that showcase our expertise." />
        <meta property="og:url" content="https://www.codewolfers.com/portfolio" />
      </Helmet>

      <Projects />
      
    </>
  );
};

export default PortfolioPage;
