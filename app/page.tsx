"use client";

import Header from "./components/Header";
import gsap from "gsap";
import { ChangeEvent, useRef, useState } from "react";
import { emailCheck } from "./utils/validation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGSAP } from "@gsap/react";
import H3 from "./components/H3";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [email, setEmail] = useState("");
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = async () => {
    if (inputRef.current && !emailCheck(email)) {
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

  useGSAP(() => {
    gsap.from(h3Ref.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    });
    gsap.from(h1Ref.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      ease: "power1.out",
    });
    gsap.from(inputRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      ease: "power1.out",
    });
    gsap.from(buttonRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      delay: 0.6,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-redSoft to-red antialiased p-6 min-h-screen  min-w-screen w-screen overflow-hidden">
      <div className="bg-beige h-full rounded-[20px] p-6 text-black overflow-hidden">
        <Header />
        <main className="flex h-full flex-col w-full justify-end pb-10">
          <div className="w-full h-full flex items-center justify-center relative">
            {/* <Image
              src={"/assets/illustrations/launch-illustration.svg"}
              fill
              alt="Rocket launch illustration"
              className="max-w-none z-10 object-fit md:object-scale-down"
            /> */}
            <DotLottieReact
              src="/assets/animations/launchAnimation.lottie"
              loop
              autoplay
              className="z-10 absolute inset-0 origin-top-left transform scale-100"
            />
          </div>

          <article className="flex flex-col justify-start gap-6 z-50">
            <div className="flex flex-col justify-start gap-1">
              {/* <h3 ref={h3Ref} className="font-medium text-xl text-grey">
                Coming soon
              </h3> */}
              <H3 />
              <h1 ref={h1Ref} className="font-bold text-[44px] leading-[3rem]">
                Get notified when we will launch!
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full px-1 md:flex-row md:items-center md:justify-start max-w-[50rem]">
              <input
                onChange={handleChange}
                ref={inputRef}
                className={` bg-white placeholder:text-grey text-black rounded-md text-base font-medium border p-4 w-full outline-none transition-shadow ease-in duration-300 max-w-[45rem] ${
                  isShaking
                    ? "text-red shadow-error border-red"
                    : "shadow-component border-black"
                }`}
                type="email"
                placeholder="Your email address..."
                required
              />

              <button
                ref={buttonRef}
                onMouseDown={handleButtonClick}
                className="border-black bg-red text-white rounded-md text-base font-medium p-4 border w-full shadow-component active:translate-x-1 active:translate-y-1  active:shadow-inner-component md:max-w-[20rem]"
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
