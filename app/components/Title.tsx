import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";

interface titleProps {
  success: boolean;
}

export default function Title({ success }: titleProps) {
  const successCharsRef = useRef<HTMLSpanElement[]>([]);
  const defaultCharsRef = useRef<HTMLSpanElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (success) {
      fadeOut();
    }
  }, [success]);

  const addSuccessCharRef = (el: HTMLSpanElement | null) => {
    if (el && !successCharsRef.current.includes(el)) {
      successCharsRef.current.push(el);
    }
  };

  const addDefaultCharRef = (el: HTMLSpanElement | null) => {
    if (el && !defaultCharsRef.current.includes(el)) {
      defaultCharsRef.current.push(el);
    }
  };

  //set texts

  const defaultText = "Get notified when we will launch!";
  const successText = "We will keep you updated!";

  //split words

  const defaultWords = defaultText.split(" ");
  const successWords = successText.split(" ");

  //Fadeout

  const fadeOut = () => {
    gsap.to(defaultCharsRef.current, {
      y: -10,
      opacity: 0,
      ease: "power1.out",
      stagger: {
        each: 0.05,
        from: "start",
      },
      duration: 0.5,
      onComplete: fadeIn,
    });
  };

  // Fade in animation
  const fadeIn = () => {
    gsap.fromTo(
      successCharsRef.current,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        stagger: {
          each: 0.05,
          from: "start",
        },
        duration: 0.5,
      }
    );
  };

  // Load animation
  useGSAP(() => {
    gsap.from(titleRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="relative">
      <h1
        ref={titleRef}
        className={`font-bold text-[44px] leading-[3rem] items-center justify-start flex-wrap left-0 top-0 absolute   z-50`}
      >
        {successWords.map((word, wordIndex) => (
          <div key={wordIndex} className="mr-2 inline-block">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                ref={addSuccessCharRef}
                className="inline-block opacity-0"
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </h1>

      <h1
        ref={titleRef}
        className="font-bold text-[44px] leading-[3rem] flex items-center justify-start flex-wrap"
      >
        {defaultWords.map((word, wordIndex) => (
          <div key={wordIndex} className="mr-2 inline-block">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                ref={addDefaultCharRef}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </h1>
    </div>
  );
}
