'use client'
import Header from "../header/page"
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
export default function aboutus() {
    return (
        <main className="my-8 mx-12 px-12">
            <Header/>
            <div className="p-12">
                <div className="absolute">
                    <img src="assets/about/desktop/image-hero.jpg"/>
                </div>
                <div className="mt-12">
                    <div id="about" className="text-end relative font-bold text-gray-300">
                        <p>About</p>
                    </div>
                    <div className="relative bg-white flex align-center">
                        <div className="">
                            <p className="font-bold text-4xl">Your team of professionals</p>
                            <p>Our small team of world-class professionals will work with you every step of the way.<br/> Strong relationships are at the core of everything we do.<br/> This extends to the relationship our projects have with their surroundings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}