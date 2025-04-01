import Header from '../header/page.js'
import Footer from "../footer/page.js"
export default function Contact() {
    return (
        <main>
            <div id="fringe" className="fixed left-0 top-0 h-1/6 w-16 flex items-center justify-center border-r border-gray-300">
                <div className="flex flex-col">
                    <div className=" h-full border-l border-gray-300"></div>
                    <div className=" vertical-text text-gray-400 uppercase tracking-widest mt-2">
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
            <Header />
            <div className="p-12">
                <div className="absolute">
                    <img src="assets/contact/desktop/image-hero.jpg" />
                </div>
                <div className="">
                    <div id="about" className="text-end relative font-bold text-gray-300">
                        <p id="about1">Contact</p>
                    </div>
                    <div id="team" className="w-3/5 relative bg-white flex align-center">
                        <div className="">
                            <p className="font-bold text-5xl mb-4 p-12">Tell us about<br />your project</p>
                            <p className="font-semibold text-gray-500">We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-8 flex mt-12 mb-12">
                <div className='p-5'>
                    <p className='font-bold text-6xl'>Contact <br /> Details</p>
                </div>
                <div id="contact" className="flex gap-x-12 mt-6 ml-12">
                    {/* Main Office */}
                    <div>
                        <h3 className="font-bold">Main Office</h3>
                        <p>Mail:archone@mail.com</p>
                        <p>Address:1892 Chenoweth Drive TN</p>
                        <p>Phone:123-456-3451</p>
                        <a
                            href="https://www.google.com/maps/place/Chenoweth+Ln,+La+Vergne,+TN+37086,+EE.+UU./@36.0388607,-86.54419,17z/data=!3m1!4b1!4m6!3m5!1s0x88640d7fc4f94775:0x3e6e3762ae255def!8m2!3d36.0388564!4d-86.5416151!16s%2Fg%2F1tslkg72?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center mt-2"
                        >
                            View on Map <span className="ml-1">→</span>
                        </a>
                    </div>

                    {/* Office II */}
                    <div>
                        <h3 className="font-bold">Office II</h3>
                        <p>Mail: archtwo@mail.com</p>
                        <p>Address: 3399 Wines Lane VR</p>
                        <p>Phone: 832-123-4321</p>
                        <a
                            href="https://www.google.com/maps/place/Wines+Ln,+Virginia+22630,+EE.+UU./@38.943577,-78.2411456,17z/data=!3m1!4b1!4m6!3m5!1s0x89b5c6e523714431:0x167b8d43f8cd47f1!8m2!3d38.9435729!4d-78.2385707!16s%2Fg%2F1tgcbd48?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center mt-2"
                        >
                            View on Map <span className="ml-1">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='ms-8 mt-12 pt-12 mb-12'>
                <img src="assets/contact/desktop/image-map.png" />
            </div>
            <div id="formview" className="p-8 mt-12">
                <p className=" w-1/5 text-5xl font-bold">Connect <br/>with us</p>
                <form id="form" className="space-y-6 ms-12">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full border-b border-black bg-transparent focus:outline-none focus:border-black py-2 placeholder-gray-400"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full border-b border-black bg-transparent focus:outline-none focus:border-black py-2 placeholder-gray-400"
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Message"
                            rows="4"
                            className="w-full border-b border-black bg-transparent focus:outline-none focus:border-black py-2 placeholder-gray-400"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full"
                        >
                            <img src="assets/icons/icon-arrow.svg" />
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </main>
    )
}