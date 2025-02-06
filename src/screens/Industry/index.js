import { Helmet } from "react-helmet-async";
import React from "react";
import WeServe from "./components/WeServe";

const WeServePage = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - Codewolfers | Web, App & Software Solutions</title>
        <meta name="description" content="Explore the industries we serve at Codewolfers. We offer expert web development, mobile app solutions, and custom software development for diverse industries." />
        <meta name="keywords" content="industries we serve, web development, app development, software solutions, Codewolfers services, IT solutions" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Industries We Serve - Codewolfers | Web, App & Software Solutions" />
        <meta property="og:description" content="Discover the various industries we support with our web, app, and custom software development services. Learn how Codewolfers can help your business." />
        <meta property="og:url" content="https://www.codewolfers.com/industries-we-serve" />
      </Helmet>

      <WeServe />
    </>
  );
};

export default WeServePage;
