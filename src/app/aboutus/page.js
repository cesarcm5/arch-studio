'use client'
import Header from "../header/page"
import Footer from "../footer/page.js"

const crew = [
    {
        name: "Jake Richards",
        avatar: "assets/about/desktop/avatar-jake.jpg",
        rol: "Chief Architect",
    },
    {
        name: "Thompson Smith",
        avatar: "assets/about/desktop/avatar-thompson.jpg",
        rol: "Head of Finance",
    },
    {
        name: "Jackson Rourke",
        avatar: "assets/about/desktop/avatar-jackson.jpg",
        rol: "Lead Designer",
    },
    {
        name: "Maria Simpson",
        avatar: "assets/about/desktop/avatar-maria.jpg",
        rol: "Senior Architect",
    }
]
export default function Aboutus() {
    return (
        <main className="">
            <div id="fringe" className="fixed left-0 top-0 h-1/6 w-16 flex items-center justify-center border-r border-gray-300">
                <div className="flex flex-col">
                    <div className=" h-full border-l border-gray-300"></div>
                    <div className=" vertical-text text-gray-400 uppercase tracking-widest mt-2">
                        <p>About Us</p>
                    </div>
                </div>
            </div>
            <Header />
            <div className="p-12">
                <div className="absolute">
                    <img src="assets/about/desktop/image-hero.jpg" />
                </div>
                <div className="">
                    <div id="about" className="text-end relative font-bold text-gray-300">
                        <p id="about1">About</p>
                    </div>
                    <div id="team" className="w-3/5 relative bg-white flex align-center">
                        <div className="">
                            <p className="font-bold text-5xl mb-4 p-12">Your team of <br /> professionals</p>
                            <p className="font-semibold text-gray-500">Our small team of world-class professionals will work with you every step of the way.Strong relationships are at the core of everything we <br /> do. This extends to the relationship our projects have with their surroundings.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-12 mb-12">
                <div id="heritage" className="text-left w-2/4">
                    <p className="font-bold text-5xl">
                        Our Heritage
                    </p>
                    <p className="mt-9 font-semibold text-gray-500">
                        Founded in 2007, we started as a trio of architects. Our complimentary skills and
                        relentless attention to detail turned Arch into one of the most sought after boutique
                        firms in the country.
                    </p>
                    <p className="mt-3 font-semibold text-gray-500">
                        Speciliazing in Urban Design allowed us to focus on creating exceptional structures that
                        live in harmony with their surroundings. We consider every detail from every surrounding
                        element to inform our designs.
                    </p>
                    <p className="mt-3 font-semibold text-gray-500">
                        Our small team of world-class professionals provides input on every project.
                    </p>
                </div>
                <div className="">
                    <img className="" src="assets/about/desktop/image-heritage.jpg" />
                </div>
            </div>
            <div id="leaders" className="flex p-6">
                <div className="mt-12">
                    <p className="text-6xl font-bold p-5">The leaders</p>
                </div>
                <div id="crew" className="grid grid-cols-2 p-5">
                    {crew.map((member, index) => (
                        <div className="p-2" key={index}>
                            <div className="">
                                <img src={member.avatar} alt={`${member.name} avatar`} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-xl">{member.name}</p>
                                <p className="text-gray-500">{member.rol}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </main>
    )
}