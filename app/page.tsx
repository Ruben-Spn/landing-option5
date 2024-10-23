import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-redSoft to-red antialiased p-6 min-h-screen  min-w-screen w-screen">
      <div className="bg-beige h-full rounded-[20px] p-6 text-black">
        <Header />
        <main className="flex h-full flex-col w-full justify-end pb-10  overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={"/assets/illustrations/illustration.svg"}
              fill
              alt="Rocket launch illustration"
              className="max-w-none z-10 object-fit"
            />
          </div>

          <article className="flex flex-col justify-start gap-6 z-50">
            <div className="flex flex-col justify-start gap-1">
              <h3 className="font-medium text-xl text-grey">Coming soon</h3>
              <h1 className="font-bold text-[44px] leading-[3rem]">
                Get notified when we will launch!
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full px-1">
              <input
                className="border-black bg-white text-grey rounded-md text-base font-medium border p-4 w-full outline-none focus:shadow-none transition-shadow ease-in duration-300 shadow-component"
                type="email"
                placeholder="Your email address..."
              />
              <button className="border-black bg-red text-white rounded-md text-base font-medium p-4 border w-full shadow-component active:translate-x-1 active:translate-y-1  active:shadow-inner-component">
                Subscribe
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
