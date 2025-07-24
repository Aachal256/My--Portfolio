import React from "react";
import { Travel, Weather, Password } from "../../assets/Index.js";

const projects = [
  {
    // Travel Destination Explorer project is here
    id: "1",
    title: "Travel Destination Explorer",
    des: "I built this using React JS to help users discover amazing travel destinations with beautiful images and detailed descriptions. ",
    src: Travel,
    githubURL: "https://github.com/Aachal256/Travel-Destination-Explorer",
    deployURL: "https://travel-destination-explorer-topaz.vercel.app",
  },
  {
    // Weather application Project data is here
    id: "2",
    title: "Weather application",
    des: "A weather forecasting app built with ReactJS that allows users to search for real-time weather data by city.",
    src: Weather,
    githubURL: "https://github.com/Aachal256/weather-application",
    deployURL: "https://weather-application-aachal.netlify.app",
  },
  {
    // Password Generator Project data is here
    id: "3",
    title: "Password Generator",
    des: "A customizable password generator built using JavaScript/React, allowing users to create secure passwords based on selected criteria.",
    src: Password,
    githubURL: "https://github.com/Aachal256/Password-Generator",
    deployURL: "https://password-generator-aachal.netlify.app",
  },
];

function ProjectCard() {
  const handleRedirect = (githubURL) => {
    window.open(githubURL);
  };

  return (
    <React.Fragment>
      {projects.map(({ id, des, src, title, githubURL }) => (
        <div
          onClick={() => handleRedirect(githubURL)}
          key={id}
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 border-y-2 border-white py-5"
        >
          <div
            id={id}
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer "
            onClick={() => handleRedirect(githubURL)}
          >
            <img className="w-full h-60 object-cover" src={src} alt="" />
          </div>
          <div className="w-full mt-5 flex flex-wrap gap-6">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-2xl">{title}</h3>
            </div>
            <div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                {" "}
                {des}
              </p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ProjectCard;
