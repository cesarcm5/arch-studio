import Header from '../header/page.js'
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
            <div className="p-8">
                <h2 className="text-3xl font-bold">Contact Details</h2>
                <div className="flex justify-between mt-6">
                    {/* Main Office */}
                    <div>
                        <h3 className="font-bold">Main Office</h3>
                        <p>Mail: archone@mail.com</p>
                        <p>Address: 1892 Chenoweth Drive TN</p>
                        <p>Phone: 123-456-3451</p>
                        <a
                            href="https://www.google.com/maps/place/1892+Chenoweth+Dr+TN"
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
                        <p>Address: 3399 Wines Lane TX</p>
                        <p>Phone: 832-123-4321</p>
                        <a
                            href="https://www.google.com/maps/place/3399+Wines+Ln+TX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center mt-2"
                        >
                            View on Map <span className="ml-1">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}