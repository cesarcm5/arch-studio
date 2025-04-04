'use client'
import Header from "../header/page.js"
import Footer from "../footer/page.js"
const works = [
    {
        id: 0,
        image: "../assets/portfolio/desktop/image-228b.jpg",
        mobileImage: "../assets/portfolio/mobile/image-228b.jpg",
        title: "Seraph Station",
        date: "September 2019",
        alt: "Seraph Station",
    },
    {
        id: 1,
        image: "../assets/portfolio/desktop/image-del-sol.jpg",
        mobileImage: "../assets/portfolio/mobile/image-del-sol.jpg",
        title: "Project Del Sol",
        date: "January 2016",
        alt: "Project Del Sol",
    },
    {
        id: 2,
        image: "../assets/portfolio/desktop/image-edelweiss.jpg",
        mobileImage: "../assets/portfolio/mobile/image-edelweiss.jpg",
        title: "Grand Edelweiss Hotel",
        date: "December 2013",
        alt: "Grand Edelweiss Hotel",
    },
    {
        id: 3,
        image: "../assets/portfolio/desktop/image-eebox.jpg",
        mobileImage: "../assets/portfolio/mobile/image-eebox.jpg",
        title: "Eebox Building",
        date: "August 2017",
        alt: "Eebox Building",
    },
    {
        id: 4,
        image: "../assets/portfolio/desktop/image-federal.jpg",
        mobileImage: "../assets/portfolio/mobile/image-federal.jpg",
        title: "Federal II Tower",
        date: "March 2017",
        alt: "Federal II Tower",
    },
    {
        id: 5,
        image: "../assets/portfolio/desktop/image-hypers.jpg",
        mobileImage: "../assets/portfolio/mobile/image-hypers.jpg",
        title: "Hypers",
        date: "January 2012",
        alt: "Hypers",
    },
    {
        id: 6,
        image: "../assets/portfolio/desktop/image-netcry.jpg",
        mobileImage: "../assets/portfolio/mobile/image-netcry.jpg",
        title: "Netcry Tower",
        date: "August 2012",
        alt: "Netcry Tower",
    },
    {
        id: 7,
        image: "../assets/portfolio/desktop/image-paramour.jpg",
        mobileImage: "../assets/portfolio/mobile/image-paramour.jpg",
        title: "Project Paramour",
        date: "February 2008",
        alt: "Project Paramour",
    },
    {
        id: 8,
        image: "../assets/portfolio/desktop/image-prototype.jpg",
        mobileImage: "../assets/portfolio/mobile/image-prototype.jpg",
        title: "Le Prototype",
        date: "October 2015",
        alt: "Le Prototype",
    },
    {
        id: 9,
        image: "../assets/portfolio/desktop/image-seraph.jpg",
        mobileImage: "../assets/portfolio/mobile/image-seraph.jpg",
        title: "Seraph Station",
        date: "September 2019",
        alt: "Seraph Station",
    },
    {
        id: 10,
        image: "../assets/portfolio/desktop/image-sxiv.jpg",
        mobileImage: "../assets/portfolio/mobile/image-sxiv.jpg",
        title: "SXIV Tower",
        date: "March 2011",
        alt: "SXIV Tower",
    },
    {
        id: 11,
        image: "../assets/portfolio/desktop/image-trinity.jpg",
        mobileImage: "../assets/portfolio/mobile/image-trinity.jpg",
        title: "Trinity Bank Tower",
        date: "September 2010",
        alt: "Trinity Bank Tower",
    }
];
export default function Portfolio() {

    return (
        <main className="">
            <div id="fringe" className="hidden sm:block fixed left-0 top-0 h-1/6 w-16 flex items-center justify-center border-r border-gray-300">
                <div className="flex flex-col">
                    <div className=" h-full border-l border-gray-300"></div>
                    <div className=" vertical-text text-gray-400 uppercase tracking-widest mt-2">
                        <p>PORTFOLIO</p>
                    </div>
                </div>
            </div>
            <Header />
            <div className=" flex flex-wrap pt-12 ms-3 lg:ms-12 ps-1">


                {works.map((item, index) => (
                    <div key={item.id} className="ms-6 my-6 hidden md:block">
                        <div className="relative hidden md:block">
                            <img className="object-cover" src={item.image} alt={item.alt} />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div id="project" className="absolute inset-0 flex flex-col justify-center items-left text-white">
                                <p className="text-2xl font-bold ">{item.title}</p>
                                <p className="text-sm align-bottom ">{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {works.map((item, index) => (
                    <div key={item.id} className="ms-6 my-6 block md:hidden ">
                        <div className="relative">
                            <img className="object-cover" src={item.mobileImage} alt={item.alt} />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div id="project" className="absolute inset-0 flex flex-col justify-center items-left text-white">
                                <p className="text-2xl font-bold ">{item.title}</p>
                                <p className="text-sm align-bottom ">{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
            <Footer />
        </main>
    )
}