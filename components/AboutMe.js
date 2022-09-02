import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working with{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️ 
            </a>
            {" "}and{" "}
            <a
              className="bg-gray-900 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrlNext}
            >
              NextJs ⭐
            </a>
          </p>
          
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href="/projects"
                  
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Projects
                </a>{" "}
                and contact me.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
             
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              
             
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              
              
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="data:image/png;base64,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"
                className="h-20 w-20 mx-4 my-4"
              />
             
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
