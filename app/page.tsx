import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-redSoft to-red antialiased p-6 min-h-screen  w-screen overflow-hidden">
      <div className="bg-beige h-full rounded-[20px] p-6 text-black">
        <Header />
        <main className="flex h-full flex-col w-full ">
          <Image
            src={"/assets/illustrations/illustration.svg"}
            width={220}
            height={220}
            alt="Rocket launch illustration"
            // className="max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          />

          <article className="flex flex-col justify-start gap-6">
            <div className="flex flex-col justify-start gap-1">
              <h3 className="font-medium text-xl text-grey">Coming soon</h3>
              <h1 className="font-bold text-[44px] leading-snug">
                Get notified when we wil launch!
              </h1>
            </div>
            <form
              action="submit"
              className="flex flex-col items-center justify-center gap-4 w-full"
            >
              <input
                className="border-black bg-white text-grey rounded-md text-base font-medium border p-4 w-full"
                type="text"
                placeholder="Your email address..."
              />
              <button className="border-black bg-red text-white rounded-md text-base font-medium p-4 border w-full">
                Subscribe
              </button>
            </form>
          </article>
        </main>
      </div>
    </div>
  );
}
