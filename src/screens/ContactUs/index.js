import { Helmet } from "react-helmet-async";
import React from "react";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Codewolfers | Get in Touch for Web & App Development</title>
        <meta name="description" content="Get in touch with Codewolfers for expert web, app, and software development solutions. Contact us for a custom project consultation or inquiry." />
        <meta name="keywords" content="contact Codewolfers, get in touch, web development, app development, software development, hire developers, IT services" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Contact Us - Codewolfers | Get in Touch for Web & App Development" />
        <meta property="og:description" content="Contact Codewolfers for web development, mobile apps, and custom software solutions. Let's start your project today!" />
        <meta property="og:url" content="https://www.codewolfers.com/contact-us" />
      </Helmet>

      <Banner />
      <Contact />
    </>
  );
};

export default ContactUs;
