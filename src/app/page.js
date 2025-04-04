'use client';
import Link from "next/link"
import Header from "../app/header/page.js";
import Footer from "../app/footer/page.js"
import { useState } from "react";

const projects = [
  {
    image: "/assets/home/desktop/image-hero-paramour.jpg",
    title: <span>Project <br /> Paramour</span>,
    subtitle: <span>Project made for an art museum near Southwest London. <br />ff Project Paramour is a statement of bold, modern <br /> architecture.</span>,
    alt: "Project Paramour",
  },
  {
    image: "/assets/home/desktop/image-hero-seraph.jpg",
    title: <span>Project <br /> Seraph</span>,
    subtitle: <span> The Seraph Station project challenged us to design a unique station <br /> that would transport people through time. The result is a <br /> fresh and futuristic model inspired by space stations. </span>,
    alt: "Project Seraph",
  },
  {
    image: "/assets/home/desktop/image-hero-federal.jpg",
    title: <span>Federal II <br /> Tower</span>,
    subtitle: <spna>A sequel theme project for a tower originally built in the 1800s.<br /> We achieved this with a striking look of brutal minimalism <br /> with modern touches.</spna>,
    alt: "Federal II Tower",
  },
  {
    image: "/assets/home/desktop/image-hero-trinity.jpg",
    title: <span>Trinity Bank <br /> Tower</span>,
    subtitle: <span>Trinity Bank challenged us to make a concept for a 84 story building located in the middle <br /> of a city with a high earthquake frequency. For this project we used curves <br /> to blend design and stability to meet our objectives.</span>,
    alt: "Trinity Bank Tower",
  },
];

const item = [
  {
    image: "assets/portfolio/desktop/image-del-sol.jpg",
    mobileImage: "assets/portfolio/mobile/image-del-sol.jpg",
    title: "Project Del Sol",
    date: "View All Projects",
    alt: "Project Del Sol"
  },
  {
    image: "../assets/portfolio/desktop/image-228b.jpg",
    mobileImage: "assets/portfolio/mobile/image-228b.jpg",
    title: "Seraph Station",
    date: "View All Projects",
    alt: "Seraph Station"
  },
  {
    image: "../assets/portfolio/desktop/image-prototype.jpg",
    mobileImage: "assets/portfolio/mobile/image-prototype.jpg",
    title: "Le Prototype",
    date: "View All Projects",
    alt: "Le Prototype"
  }
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main id="main" className="">
      <div id="fringe" className="hidden md:block fixed left-0 top-0 h-1/6 w-16 flex items-center justify-center border-r border-gray-300">
        <div className="flex flex-col">
          <div className=" h-full border-l border-gray-300"></div>
          <div className=" vertical-text text-gray-400 uppercase tracking-widest mt-2">
            <p>Home</p>
          </div>
        </div>
      </div>
      <Header />
      <div className="relative mt-8 md:pt-5">
        <div className="relative">
          <img
            src={projects[selectedTab].image}
            alt={projects[selectedTab].alt}
            id="first-image"
            className="w-full h-2/6 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div id="content-layout" className="absolute inset-0 flex flex-col justify-start md:justify-center text-white lg:pb-10 lg:ps-10 lg:mx-12">
            <p className="text-4xl lg:text-8xl font-extrabold mt-10 text-left ps-2 lg:ps-12 mx-12">
              {projects[selectedTab].title}
            </p>
            <p className="font-semibold  text-sm md:text-base mt-5 ps-2 lg:ps-12 mx-12 break-keep md:font-bold">
              {projects[selectedTab].subtitle}
            </p>
            <div id="seeourportfolio" className=" p-2 mt-12 ms-10 lg:ms-20">
              <button className="">
                <Link className="flex" href="/portfolio">
                  <span className="font-semibold pt-3 pl-7 text-sm">See Our Portfolio</span>
                  <img className="pt-3 pl-3" src="/assets/icons/icon-arrow.svg" alt="right arrow" />
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div id="tab" className="absolute flex bottom-0 left-0">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2  ${index === selectedTab ? "bg-slate-900" : "bg-white"
                }`}
              onClick={() => setSelectedTab(index)}
            >
            <p className={`${index === selectedTab ? "text-white": "text-black"}`}>{index}</p>
            </button>
          ))}
        </div>
      </div>
      <div id="view2" className="md:p-12 md:ms-6 mt-4 md:mt-12">
        <div className="hidden md:block absolute">
          <p id="welcome" className=" font-bold text-9xl text-gray-300 fw-semibold">Welcome</p>
        </div>
        <div id="introduction" className="flex md:ms-12 md:mt-12 md:pt-12 sm:ps-6 md:ps-1">
          <div className="ps-5 md:ps-1">
            <p id="welcome-to-arch" className=" text-4xl md:text-7xl font-bold mt-12">Welcome to <br></br> Arch Studio</p>
            <p id="text-1" className="font-semibold text-balance md:text-pretty text-gray-500 md:text-gray-400 md:ms-2 mt-10">We have a unique network and skillset to help bring your <br className="hidden md:block"></br> projects to life. Our small team of highly skilled individuals <br className="hidden md:block"></br> combined with our large network put us in a strong <br className="hidden md:block"></br> position to deliver exceptional results.</p>
            <p className="font-semibold text-balance text-gray-500 md:text-gray-400 md:ms-2 mt-5">Over the past 10 years, we have worked on all kinds of <br className="hidden md:block"></br> projects. From stations to high-rise buildings, we create <br className="hidden md:block"></br> spaces that inspire and delight.</p>
            <p className="font-semibold text-balance text-gray-500 md:text-gray-400 md:ms-2 mt-5">We work closely with our clients so that we understand the <br className="hidden md:block"></br> intricacies of each project. This allows us to work in <br className="hidden md:block"></br> harmony the surrounding area to create truly stunning <br className="hidden md:block"></br> projects that will stand the test of time.</p>
          </div>
          <div className="hidden md:block">
            <img id="imagewelcome" className="" src="/assets/home/desktop/image-welcome.jpg" alt="welcome image" />
          </div>
        </div>
      </div>
      <div id="view3" className="relative sm-3/4">
        <img id="small-team-image" className="object-cover w-full" src="assets/home/desktop/image-small-team.jpg" alt="Small team" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div id="smallteam" className="absolute inset-0 flex flex-col justify-center text-white ps-8 md:ps-20 md:ml-20 md:pb-8 ">
          <p className=" text-5xl md:text-6xl font-bold">Small team,<br />big ideas</p>
          <div id="aboutus" className=" static mt-12">
            <Link href="/aboutus">
              <button className="flex text-left text-white py-6 pl-9 rounded">
                <span className="font-semibold">About Us</span>
                <img className="ps-4" src="/assets/icons/icon-arrow.svg" alt="right arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-12 p-12">
        <div className="md:flex">
          <div>
            <p className="text-5xl font-bold">Featured</p>
          </div>
          <div id="seeall" className="ms-auto pt-3">
            <Link href="/portfolio">
              <button className="flex text-left text-white py-2 px-4 rounded">
                <span className="font-semibold">See All</span>
                <img className="ml-2" src="/assets/icons/icon-arrow.svg" alt="right arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="md:flex pe-5 md:pe-1">
          {item.map((item, index) => (
            <div className="relative ms-6 my-6" key={index}>
              <div className="relative">
                <img
                  className="hidden md:block object-cover w-full"
                  src={item.image}
                  alt={item.alt}
                  id="upcoming-projects"
                />
                <img
                  className="object-cover w-full block md:hidden"
                  src={item.mobileImage}
                  alt={item.alt}
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>

                {/* Number Overlay */}
                <div className="hidden md:block absolute top-4 left-4 text-[10rem] font-bold text-white opacity-50">
                  {index + 1}
                </div>

                {/* Project Info */}
                <div
                  id="project"
                  className="hidden md:block absolute inset-0 flex flex-col justify-end p-4 text-white"
                >
                  <p className="static md:text-2xl font-bold">{item.title}</p>
                  <p className="text-sm">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  );
}