import { Helmet } from "react-helmet-async";
import React from "react";

const policySections = [
  {
    title: "1. Data Collection",
    points: [
      "We collect personal information such as name, email address, phone number, and other details required for project communication.",
      "Technical data, such as IP addresses, browser type, and device information, may be collected for analytics and service improvement.",
      "All data is collected with your consent and only for purposes directly related to providing our services.",
    ],
  },
  {
    title: "2. Use of Data",
    points: [
      "Your personal information is used for communication, project updates, and delivering the agreed-upon services.",
      "We use technical data to monitor and improve the performance of our website and services.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Data Protection",
    points: [
      "We implement robust security measures to protect your data from unauthorized access, loss, or misuse.",
      "Access to your data is restricted to authorized personnel only.",
      "While we take all reasonable precautions, we cannot guarantee absolute security due to the inherent risks of the internet.",
    ],
  },
  {
    title: "4. Cookies",
    points: [
      "Our website uses cookies to enhance user experience, analyze site usage, and improve functionality.",
      "You can manage or disable cookies through your browser settings, but some features may not work properly.",
    ],
  },
  {
    title: "5. Data Sharing",
    points: [
      "Your data may be shared with trusted third-party service providers who assist us in delivering our services (e.g., hosting providers, payment processors).",
      "We ensure that these providers adhere to strict data protection standards.",
      "We may disclose your data if required by law or to protect our legal rights, comply with legal obligations, or enforce our policies.",
    ],
  },
  {
    title: "6. Your Rights",
    points: [
      "You have the right to access, update, or delete your personal data by contacting us.",
      "You can request a copy of the data we have collected about you and inquire about how it is being used.",
      "You may withdraw consent for data processing at any time, though this may limit the services we can provide.",
    ],
  },
  {
    title: "7. Third-Party Links",
    points: [
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "8. Updates to Privacy Policy",
    points: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "Clients will be notified of significant changes, and the updated policy will be posted on our website.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Codewolfers | Web & App Development</title>
        <meta name="description" content="Read the Privacy Policy of Codewolfers. We value your privacy and explain how we collect, use, and protect your personal data when you use our services." />
        <meta name="keywords" content="privacy policy, data protection, cookies, personal data, web development, app development, Codewolfers" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Privacy Policy - Codewolfers | Web & App Development" />
        <meta property="og:description" content="Learn how Codewolfers collects, uses, and protects your personal data in compliance with our Privacy Policy. Your privacy matters to us!" />
        <meta property="og:url" content="https://www.codewolfers.com/privacy-policy" />
      </Helmet>

      <div className="w-[90%] mx-auto rounded-[12px] p-6 bg-gray-100 min-h-screen text-gray-800 poppins my-5">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Codewolfers, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we
          collect, use, and safeguard your data when you use our services.
        </p>

        {policySections.map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
          </p>
          <p className="font-semibold">Email: contact@codewolfers.com</p>
          <p className="font-semibold">Phone: +91 8810809712</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
