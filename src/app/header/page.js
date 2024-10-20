
export default function Header() {
    return (
        <header className="flex">
            <div className="me-5">
                <img src="/assets/logo.svg"/>
            </div>
            <div className="md:space-x-12 md:ms-12 md:px-10 text-gray-500 font-bold pt-2">
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