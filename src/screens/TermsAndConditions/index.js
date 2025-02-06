import { Helmet } from "react-helmet-async";
import React from "react";

const termsData = [
  {
    title: "1. General Terms",
    content: [
      "All projects are initiated only after a formal agreement and the advance payment are received.",
      "All communications regarding the project must be documented via email or other approved communication channels.",
      "The company reserves the right to decline any project that does not align with its policies or values.",
      "Clients must provide all necessary resources and details (content, media, etc.) to begin the project.",
    ],
  },
  {
    title: "2. Payment Terms",
    content: [
      "A minimum of 50% advance payment is required before project initiation.",
      "Remaining payments must be cleared according to the agreed-upon milestones or before project delivery.",
      "Failure to make payments on time may lead to project delays or termination.",
      "All invoices must be settled within 7 days of issuance unless otherwise agreed upon in writing.",
    ],
  },
  {
    title: "3. Refund Policy",
    content: [
      "If the company cancels the project or discontinues work for any reason, a full refund of the payment will be provided.",
      "If the client cancels the project after work has started, no refund will be provided, regardless of the reason for cancellation.",
      "Refunds are not applicable for completed milestones or delivered work.",
      "Advance payments are non-refundable unless the company fails to initiate the project.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "All intellectual property rights for the completed project remain with the company until full payment is received.",
      "Upon full payment, ownership of the project is transferred to the client.",
      "The company reserves the right to showcase the project in its portfolio unless explicitly restricted by the client.",
    ],
  },
  {
    title: "5. Confidentiality",
    content: [
      "All client data and project information will be treated as confidential.",
      "The company will not disclose sensitive information to third parties without prior consent.",
      "The client agrees to keep project-related communication and proprietary methods confidential.",
    ],
  },
  {
    title: "6. Liability",
    content: [
      "The company is not liable for indirect, incidental, or consequential damages resulting from the use of its services.",
      "The company is not responsible for delays or issues caused by third-party services, platforms, or unforeseen circumstances.",
      "Any bugs or issues reported after project delivery will be addressed as per the agreed maintenance terms or additional charges.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "The company reserves the right to terminate the project if terms are violated or payments are not cleared on time.",
      "In the event of termination, all delivered work and payments made will be non-refundable.",
    ],
  },
  {
    title: "8. Dispute Resolution",
    content: [
      "Any disputes arising from the project will be resolved amicably through mutual discussions. If unresolved, the matter will be referred to arbitration.",
      "The jurisdiction for legal proceedings will be the courts of the company’s registered location.",
    ],
  },
  {
    title: "9. Modifications to Terms",
    content: [
      "The company reserves the right to update or modify these terms at any time without prior notice.",
      "Clients will be notified of significant changes, and continued use of services constitutes acceptance of the updated terms.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Codewolfers | Web & App Development</title>
        <meta name="description" content="Read the Terms and Conditions of Codewolfers. Understand the rules, payment terms, intellectual property rights, and dispute resolution for using our services." />
        <meta name="keywords" content="terms and conditions, payment terms, intellectual property, liability, confidentiality, dispute resolution, Codewolfers" />
        <meta name="author" content="Codewolfers" />
        <meta property="og:title" content="Terms and Conditions - Codewolfers | Web & App Development" />
        <meta property="og:description" content="Learn about the Terms and Conditions of using Codewolfers' services, including payment policies, intellectual property, and dispute resolution." />
        <meta property="og:url" content="https://www.codewolfers.com/terms-and-conditions" />
      </Helmet>

      <div className="w-[90%] mx-auto rounded-[12px] p-6 bg-gray-100 min-h-screen text-gray-800 poppins my-5">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          These terms and conditions govern your use of the services provided by Codewolfers. By engaging with our services, 
          you agree to the following terms. Please read them carefully before proceeding.
        </p>

        {termsData.map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TermsAndConditions;
