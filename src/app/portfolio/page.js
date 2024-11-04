'use client'
import Header from "../header/page.js"
const works = [
    {
        image: "../assets/portfolio/desktop/image-228b.jpg",
        title: "Seraph Station",
        date: "September 2019",
        alt: "Seraph Station",
    },
    {
        image:"../assets/portfolio/desktop/image-del-sol.jpg",
        title: "Project Del Sol",
        date: "January 2016",
        alt: "Project Del Sol",
    },
    {
        image:"../assets/portfolio/desktop/image-edelweiss.jpg",
        title: "Grand Edelweiss Hotel",
        date: "December 2013",
        alt: "Grand Edelweiss Hotel",
    },
    {
        image: "../assets/portfolio/desktop/image-eebox.jpg",
        title: "Eebox Building",
        date: "August 2017",
        alt: "Eebox Building",
    },
    {
        image: "../assets/portfolio/desktop/image-federal.jpg",
        title: "Federal II Tower",
        date: "March 2017",
        alt: "Federal II Tower",
    },
    {
        image: "../assets/portfolio/desktop/image-hypers.jpg",
        title: "Hypers",
        date: "January 2012",
        alt: "Hypers",
    },
    {
        image: "../assets/portfolio/desktop/image-netcry.jpg",
        title: "Netcry Tower",
        date: "August 2012",
        alt: "Netcry Tower",
    },
    {
        image: "../assets/portfolio/desktop/image-paramour.jpg",
        title: "Project Paramour",
        date: "February 2008",
        alt: "Project Paramour",
    },
    {
        image: "../assets/portfolio/desktop/image-prototype.jpg",
        title: "Le Prototype",
        date: "October 2015",
        alt: "Le Prototype",
    },
    {
        image: "../assets/portfolio/desktop/image-seraph.jpg",
        title: "Seraph Station",
        date: "September 2019",
        alt: "Seraph Station",
    },
    {
        image: "../assets/portfolio/desktop/image-sxiv.jpg",
        title: "SXIV Tower",
        date: "March 2011",
        alt: "SXIV Tower",
    },
    {
        image: "../assets/portfolio/desktop/image-trinity.jpg",
        title: "Trinity Bank Tower",
        date: "September 2010",
        alt: "Trinity Bank Tower",
    }
];
export default function Portfolio() {
    
    return (
        <main className="my-8 mx-12 px-12">
            <Header/>
            <div className="flex flex-wrap">


                {works.map((item, index) => (
                    <div>
                        <div className="relative">
                            <img key={index} src={item.image} alt={item.alt}/>
                        </div>
                        <div>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                        </div>
                    </div>
                ))}


            </div>
        </main>
    )
}