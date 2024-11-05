'use client';
import Link from "next/link"
import Header from "../app/header/page.js";
import { useState } from "react";

const projects = [
  {
    image: "/assets/home/desktop/image-hero-paramour.jpg",
    title: <span>Project <br/> Paramour</span>,
    subtitle: <span>Project made for an art museum near Southwest London. <br/>ff Project Paramour is a statement of bold, modern <br/> architecture.</span>,
    alt: "Project Paramour",
  },
  {
    image: "/assets/home/desktop/image-hero-seraph.jpg",
    title: <span>Project <br/> Seraph</span>,
    subtitle: <span> The Seraph Station project challenged us to design a unique station <br/> that would transport people through time. The result is a <br/> fresh and futuristic model inspired by space stations. </span>,
    alt: "Project Seraph",
  },
  {
    image: "/assets/home/desktop/image-hero-federal.jpg",
    title: <span>Federal II <br/> Tower</span>,
    subtitle: <spna>A sequel theme project for a tower originally built in the 1800s.<br/> We achieved this with a striking look of brutal minimalism <br/> with modern touches.</spna>,
    alt: "Federal II Tower",
  },
  {
    image: "/assets/home/desktop/image-hero-trinity.jpg",
    title: <span>Trinity Bank <br/> Tower</span>,
    subtitle: <span>Trinity Bank challenged us to make a concept for a 84 story building located in the middle <br/> of a city with a high earthquake frequency. For this project we used curves <br/> to blend design and stability to meet our objectives.</span>,
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
            className="w-full h-2/6 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center text-white ps-10 mx-12">
            <p className="text-8xl font-black mt-10 text-left ps-12 mx-12">
              {projects[selectedTab].title}
            </p>
            <p className="mt-5 ps-12 mx-12 break-keep">
              {projects[selectedTab].subtitle}
            </p>
            <div className="w-1/6 bg-black p-2 mt-12 ms-12 px-2">        
              <button className="">
                <Link className="flex" href="/portfolio">
                  <p className="font-semibold">See Our Portfolio</p>
                  <img className="mx-2" src="/assets/icons/icon-arrow.svg" alt="right arrow" />
                </Link>
              </button>
            </div>
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
      <div className="p-12 ms-6 mt-12">
        <div className="absolute">
          <p id="welcome" className=" font-bold text-9xl text-gray-300 fw-semibold">Welcome</p>
        </div>
        <div className="flex ms-12 mt-12 pt-12">
          <div>
            <p className="text-7xl font-bold mt-12">Welcome to <br></br> Arch Studio</p>
            <p className="font-semibold text-gray-400 ms-2 mt-10">We have a unique network and skillset to help bring your <br></br> projects to life. Our small team of highly skilled individuals <br></br> combined with our large network put us in a strong <br></br> position to deliver exceptional results.</p>
            <p className="font-semibold text-gray-400 ms-2 mt-5">Over the past 10 years, we have worked on all kinds of <br></br> projects. From stations to high-rise buildings, we create <br></br> spaces that inspire and delight.</p>
            <p className="font-semibold text-gray-400 ms-2 mt-5">We work closely with our clients so that we understand the <br></br> intricacies of each project. This allows us to work in <br></br> harmony the surrounding area to create truly stunning <br></br> projects that will stand the test of time.</p>
          </div>
          <div className="mx-auto">
            <img className="" src="/assets/home/desktop/image-welcome.jpg" alt="welcome image"/>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <img className="object-cover" src="/assets/home/desktop/image-small-team.jpg"/>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>
    </main>
  );
}