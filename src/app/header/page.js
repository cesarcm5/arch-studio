import Image from "next/image";
export default function Header() {
    return (
        <header className="flex">
            <div className="me-5">
                <img src="/assets/logo.svg"/>
            </div>
            <div className="space-x-12">
                <button>
                    Portfolio
                </button>
                <button>
                    About Us 
                </button>
                <button>
                    Contact
                </button>
            </div>
        </header>
    )
}