"use client";

import Image from "next/image";
import Header from "./components/Header";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShaking, setIsShaking] = useState(false);

  const handleButtonClick = async () => {
    if (inputRef.current) {
      const { gsap } = await import("gsap");

      gsap.to(inputRef.current, {
        duration: 2,
        ease: "back.out",
        keyframes: [
          { x: -30 },
          { x: 30 },
          { x: -15 },
          { x: 15 },
          { x: -10 },
          { x: 10 },
          { x: -5 },
          { x: 5 },
          { x: 0 },
        ],
        onStart: () => {
          setIsShaking(true);
        },
        onComplete: () => {
          setIsShaking(false);
        },
      });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-redSoft to-red antialiased p-6 min-h-screen  min-w-screen w-screen">
      <div className="bg-beige h-full rounded-[20px] p-6 text-black">
        <Header />
        <main className="flex h-full flex-col w-full justify-end pb-10 ">
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
            <div className="flex flex-col items-left justify-center gap-4 w-full px-1">
              <input
                ref={inputRef}
                className={` bg-white text-grey rounded-md text-base font-medium border p-4 w-full outline-none transition-shadow ease-in duration-300 ${
                  isShaking
                    ? "text-red shadow-error border-red"
                    : "shadow-component border-black"
                }`}
                type="email"
                placeholder="Your email address..."
              />
              {/* <p className="text-xs text-red pl-4">
                Enter a valid e-mail before we get dizzy!
              </p> */}
              <button
                onMouseDown={handleButtonClick}
                className="border-black bg-red text-white rounded-md text-base font-medium p-4 border w-full shadow-component active:translate-x-1 active:translate-y-1  active:shadow-inner-component"
              >
                Subscribe
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
