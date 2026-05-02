import React from 'react';
import { GraduationCap, ShieldCheck, MessagesSquare } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

export default function Thesis() {
  const data = {
    title: "Thesis & Dissertation",
    subtitle: "Complete End-to-End Master's and PhD Support",
    description: "Writing a dissertation is a marathon. We provide dedicated academic consultants to guide you from the initial topic selection and proposal defense, all the way to final submission.",
    image: "/Thesis & Dissertation.png", // Graduation / Study image
    features: [
      {
        icon: <GraduationCap size={32} />,
        title: "Chapter-by-Chapter",
        desc: "We write iteratively, allowing you to get advisor approval on individual chapters before proceeding."
      },
      {
        icon: <MessagesSquare size={32} />,
        title: "Defense Preparation",
        desc: "We provide comprehensive Q&A mockups to ensure you are fully prepared for your viva/defense."
      },
      {
        icon: <ShieldCheck size={32} />,
        title: "100% Confidentiality",
        desc: "Your data and research IP remains strictly yours, secured via non-disclosure agreements."
      }
    ]
  };

  return <ServiceTemplate {...data} />;
}
