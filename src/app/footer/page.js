import Link from "next/link"
export default function Footer(){
    return (
        <header className="flex flex-col md:flex mt-20 mb-20 md:flex-row-reverse me-1">
            <div className="md:me-5 ms-20 md:ms-1 md:ps-1 ps-20">
                <Link href="/">
                    <img id="logo-footer" src="/assets/logo.svg"/>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:flex gap-y-3 md:flex md:space-x-12 md:ms-12 md:px-10 text-gray-500 font-bold pt-2 ms-4">
                <button>
                    <Link href="/portfolio">
                        Portfolio
                    </Link>
                </button>
                <button>
                    <Link href="/aboutus">
                        About Us 
                    </Link>
                </button>
                <button> 
                    <Link href="/contact">       
                        Contact
                    </Link>
                </button>
            </div>
        </header>
    )
}