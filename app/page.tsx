"use client";

import Header from "./components/Header";
import gsap from "gsap";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { emailCheck } from "./utils/validation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGSAP } from "@gsap/react";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [mobileKeyboardIsOpen, setMobileKeyboardIsOpen] =
    useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  //animation controls
  const fadeInAnimationControls = {
    x: -200,
    opacity: 0,
    duration: 0.5,
    delay: 0.4,
    ease: "power1.out",
  };

  const shakeAnimationControls = {
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
  };

  //check if device is mobile
  useEffect(() => {
    const ua = navigator.userAgent;
    setIsMobile(/mobile/i.test(ua));
  }, []);

  //load animations
  useGSAP(() => {
    gsap.from(inputRef.current, fadeInAnimationControls);
    gsap.from(buttonRef.current, fadeInAnimationControls);
  }, []);

  //track userinput
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //onSubmit
  const handleButtonClick = async () => {
    console.log(isMobile);
    if (inputRef.current && !emailCheck(email)) {
      gsap.to(inputRef.current, shakeAnimationControls);
    } else {
      setIsSuccess(true);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-redSoft to-red antialiased p-6 min-h-screen  min-w-screen w-screen overflow-hidden">
      <div className="bg-beige h-full rounded-[20px] p-6 text-black overflow-hidden">
        <Header />
        <main className="flex h-full flex-col w-full justify-end pb-10">
          <div className="w-full h-full  flex items-center justify-center relative">
            {/* // static image */}

            {/* <Image
              src={"/assets/illustrations/launch-illustration.svg"}
              fill
              alt="Rocket launch illustration"
              className="max-w-none z-10 object-fit md:object-scale-down"
            /> */}
            <div
              className={`w-full z-10 flex items-center justify-center max-h-[400px] ${
                mobileKeyboardIsOpen ? "opacity-40 absolute top-12" : ""
              }`}
            >
              {/* // lottie animation */}

              <DotLottieReact
                src="/assets/animations/launchAnimation.lottie"
                loop
                autoplay
                width={150}
                height={150}
                className="origin-top-left"
              />
            </div>
          </div>

          <article className="flex flex-col justify-start gap-6 z-50">
            <div className="flex flex-col justify-start gap-1">
              <Subtitle />
              <Title success={isSuccess} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full px-1 md:flex-row md:items-center md:justify-start max-w-[50rem]">
              <input
                onClick={() => (isMobile ? setMobileKeyboardIsOpen(true) : "")}
                onBlur={() => (isMobile ? setMobileKeyboardIsOpen(false) : "")}
                onChange={handleChange}
                ref={inputRef}
                className={` bg-white placeholder:text-grey hover:bg-blend-multiply text-black rounded-md text-base font-medium border p-4 w-full outline-none transition-shadow ease-in duration-300 max-w-[45rem] ${
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
                className="border-black bg-red text-white rounded-md text-base font-medium p-4 border w-full shadow-component active:translate-x-1 active:translate-y-1  active:shadow-inner-component  md:max-w-[20rem]"
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
