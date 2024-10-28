import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

export default function Subtitle() {
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  //set text
  const text = "Coming soon";

  //split text
  const words = text.split(" ");
  charsRef.current = [];

  const addCharRef = (el: HTMLSpanElement | null) => {
    if (el && !charsRef.current.includes(el)) {
      charsRef.current.push(el);
    }
  };

  //wave animation
  const waveAnimation = () => {
    gsap.to(charsRef.current, {
      keyframes: [{ y: -4 }, { y: 2 }, { y: 0 }],
      ease: "power1.out",
      repeat: -1,
      stagger: {
        each: 0.05,
        from: "start",
      },
      duration: 0.5,
      repeatDelay: 5,
      delay: 2,
    });
  };

  //load animation
  useGSAP(() => {
    gsap.from(subtitleRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: waveAnimation,
    });
  }, []);

  return (
    <h3 ref={subtitleRef} className="font-medium text-xl text-grey flex">
      {words.map((word, index) => (
        <div key={index} className="mr-1">
          {word.split("").map((char, index) => (
            <span key={index} ref={addCharRef} className="inline-block">
              {char}
            </span>
          ))}
        </div>
      ))}
    </h3>
  );
}
