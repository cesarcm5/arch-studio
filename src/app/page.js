import Header from "../app/header/page.js"
export default function Home() {
  return (
    <main className="my-8 mx-12 px-12">
      <Header />
      <div className="relative pt-12">
        <div className="relative">
          <img
            src="/assets/home/desktop/image-hero-paramour.jpg"
            alt="Project Paramour"
            className="w-full h-3/4 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center text-white ps-10 mx-12">
            <p className="text-8xl font-black mt-10 text-left ps-12 mx-12">Project <br></br> Paramour</p>
            <p className=" mt-5 ps-12 mx-12">
              Project made for an art museum near Southwest London.<br></br> Project
              Paramour is a statement of bold, modern <br></br> architecture.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
