import { Helmet } from "react-helmet-async";
import React from "react";
import OurClients from "./components/OurClients";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients - Codewolfers | Trusted by Top Businesses</title>
        <meta name="description" content="Discover the clients who trust Codewolfers for their web, app, and software development projects. We work with leading businesses to deliver custom solutions." />
        <meta name="keywords" content="our clients, Codewolfers clients, trusted businesses, web development clients, app development clients, software solutions" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Our Clients - Codewolfers | Trusted by Top Businesses" />
        <meta property="og:description" content="Explore our portfolio of satisfied clients who trust Codewolfers for their web, app, and software development needs." />
        <meta property="og:url" content="https://www.codewolfers.com/our-clients" />
      </Helmet>

      <OurClients />
    </>
  );
};

export default Clients;
