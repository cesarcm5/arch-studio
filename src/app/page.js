'use client';
import Header from "../app/header/page.js";
import { useState } from "react";

const projects = [
  {
    image: "/assets/home/desktop/image-hero-paramour.jpg",
    alt: "Project Paramour",
  },
  {
    image: "/assets/home/desktop/image-hero-seraph.jpg",
    alt: "Project Seraph",
  },
  {
    image: "/assets/home/desktop/image-hero-federal.jpg",
    alt: "Federal II Tower",
  },
  {
    image: "/assets/home/desktop/image-hero-trinity.jpg",
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
              Project Paramour
            </p>
            <p className="mt-5 ps-12 mx-12">
              Project made for an art museum near Southwest London. <br />
              Project Paramour is a statement of bold, modern <br />
              architecture.
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