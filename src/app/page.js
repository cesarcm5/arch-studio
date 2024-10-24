'use client';
import Header from "../app/header/page.js";
import { useState } from "react";

const projects = [
  {
    image: "/assets/home/desktop/image-hero-paramour.jpg",
    title: "Project Paramour",
    subtitle: `Project made for an art museum near Southwest London.\n Project Paramour is a statement of bold, modern architecture.`,
    alt: "Project Paramour",
  },
  {
    image: "/assets/home/desktop/image-hero-seraph.jpg",
    title: "Project Seraph",
    subtitle: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    alt: "Project Seraph",
  },
  {
    image: "/assets/home/desktop/image-hero-federal.jpg",
    title: "Federal II Tower",
    subtitle: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    alt: "Federal II Tower",
  },
  {
    image: "/assets/home/desktop/image-hero-trinity.jpg",
    title: "Trinity Bank Tower",
    subtitle: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    alt: "Trinity Bank Tower",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="my-8 mx-12 px-12">
      <Header />
      <div className="relative pt-12">
        <div className="relative">
          <img
            src={projects[selectedTab].image}
            alt={projects[selectedTab].alt}
            className="w-full h-3/4 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center text-white ps-10 mx-12">
            <p className="text-8xl font-black mt-10 text-left ps-12 mx-12">
              {projects[selectedTab].title}
            </p>
            <p className="mt-5 ps-12 mx-12 break-keep">
              {projects[selectedTab].subtitle}
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 ${
                index === selectedTab ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => setSelectedTab(index)}
            >
              {`0${index + 1}`}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}