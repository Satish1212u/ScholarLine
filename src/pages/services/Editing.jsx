import React from 'react';
import { SpellCheck, FileSearch, Sparkles } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

export default function Editing() {
  const data = {
    title: "Editing & Proofreading",
    subtitle: "Polishing Your Work to Perfection",
    description: "Even the best researchers need an extra set of eyes. We provide extensive line-editing, structural reorganization, grammar correction, and native-level flow enhancement.",
    image: "/Editing & Proofreading.png", // Editing typing image
    features: [
      {
        icon: <SpellCheck size={32} />,
        title: "Grammar & Syntax",
        desc: "Eradication of typos, awkward phrasing, and grammatical errors for native-level fluency."
      },
      {
        icon: <FileSearch size={32} />,
        title: "Plagiarism Reduction",
        desc: "We paraphrase and rewrite heavily flagged sections to bring similarity scores down to acceptable bounds."
      },
      {
        icon: <Sparkles size={32} />,
        title: "Tone Enhancement",
        desc: "Elevating the vocabulary and structural tone to match rigorous academic publishing standards."
      }
    ]
  };

  return <ServiceTemplate {...data} />;
}
