// import { Wrench, Factory, Car, Search, Shield } from "lucide-react";

// const expertise = [
//   {
//     icon: Wrench,
//     title: "American Society of Mechanical Engineers (ASME)",
//     description:
//       "A global organization advancing the engineering profession through knowledge, collaboration, and innovation.",
//     link: "https://www.asme.org/",
//   },
//   {
//     icon: Factory,
//     title: "American Petroleum Institute (API)",
//     description:
//       "Setting standards for the oil and natural gas industry to ensure safety, environmental protection, and efficiency.",
//     link: "https://www.api.org/",
//   },
//   {
//     icon: Car,
//     title: "Society of Automotive Engineers (SAE)",
//     description:
//       "A professional association for engineers in the automotive, aerospace, and commercial vehicle industries.",
//     link: "https://www.sae.org/",
//   },
//   {
//     icon: Search,
//     title: "American Society of Non-Destructive Testing (ASNT)",
//     description:
//       "The world’s largest technical society for nondestructive testing professionals.",
//     link: "https://www.asnt.org/",
//   },
//   {
//     icon: Shield, // Used a shield to symbolize safety & welding standards
//     title: "American Welding Society (AWS)",
//     description:
//       "A nonprofit organization advancing the science, technology, and application of welding and allied processes.",
//     link: "https://www.aws.org/",
//   },
// ];

// export function Expertise() {
//   return (
//     <section id="expertise" className="py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
//             Our Expertise
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400">
//             Our team specializes in multiple industry standards, ensuring accurate and reliable solutions.
//           </p>
//         </div>

//         {/* Expertise Cards (Clickable) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {expertise.map((field, index) => (
//             <a
//               key={index}
//               href={field.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-start p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <field.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-4" />
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                   {field.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   {field.description}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const expertise = [
  {
    logo: "/public/asme_logo.png", // Path to ASME logo
    title: "American Society of Mechanical Engineers (ASME)",
    description:
      "A global organization advancing the engineering profession through knowledge, collaboration, and innovation.",
    link: "https://www.asme.org/",
  },
  {
    logo: "/public/api_logo.png", // Path to API logo
    title: "American Petroleum Institute (API)",
    description:
      "Setting standards for the oil and natural gas industry to ensure safety, environmental protection, and efficiency.",
    link: "https://www.api.org/",
  },
  {
    logo: "/public/sae_logo.png", // Path to SAE logo
    title: "Society of Automotive Engineers (SAE)",
    description:
      "A professional association for engineers in the automotive, aerospace, and commercial vehicle industries.",
    link: "https://www.sae.org/",
  },
  {
    logo: "/public/asnt_logo.png", // Path to ASNT logo
    title: "American Society of Non-Destructive Testing (ASNT)",
    description:
      "The world’s largest technical society for nondestructive testing professionals.",
    link: "https://www.asnt.org/",
  },
  {
    logo: "/public/aes_logo.png", // Path to AWS logo
    title: "American Welding Society (AWS)",
    description:
      "Advancing the science, technology, and application of welding and allied joining disciplines.",
    link: "https://www.aws.org/",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Our team specializes in multiple industry standards, ensuring accurate and reliable solutions.
        </p>
      </div>

      {/* Centered Bigger Cards */}
      <div className="max-w-3xl mx-auto mt-10 flex flex-col items-center gap-6">
        {expertise.map((field, index) => (
          <a
            key={index}
            href={field.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center w-full max-w-xl p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* External Link Arrow in Top-Right */}
            <ExternalLink className="absolute top-4 right-4 h-6 w-6 text-blue-500" />

            {/* Logo */}
            <img src={field.logo} alt={field.title} className="h-16 w-16 mr-5" />

            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {field.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">
                {field.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
