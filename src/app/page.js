import Header from "../app/header/page.js"
export default function Home() {
  return (
    <main className="my-8 mx-12 px-12">
      <Header/>
      <div className=" relative p-10">
        <div className="relative">
          <img src="/assets/home/desktop/image-hero-paramour.jpg"/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-5xl font-bold text-center mt-10">Project Paramour</p>
          <p className="text-center mt-5">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
        </div>
      </div>
    </main>
  )
}
