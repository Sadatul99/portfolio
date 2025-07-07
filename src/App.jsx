import { useEffect, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from "./sections/AboutMe/AboutMe";
import Skills from "./sections/AboutMe/Skills";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./sections/AboutMe/MacContainer";
import { Canvas } from "@react-three/fiber";

import { Suspense } from 'react';



const App = () => {

  useEffect

  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const tl = gsap.timeline({ defaults: { ease: "hop" } });

    const counts = document.querySelectorAll(".count");

    // Set initial states
    counts.forEach((count) => {
      const digits = count.querySelectorAll(".digit h1");
      gsap.set(digits, { y: "120%", opacity: 0 });
    });
    gsap.set(".word h1", { y: "120%", opacity: 0 });

    // Shutter entrance
    // tl.fromTo(
    //   ".block",
    //   { y: "100%" },
    //   {
    //     y: "0%",
    //     duration: 1,
    //     ease: "power3.out",
    //     stagger: 0.1,
    //   },
    //   0
    // );

    // Faster counter animation
    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
        },
        index * 1 + 1
      );

      tl.to(
        digits,
        {
          y: "-100%",
          duration: 0.5,
          stagger: 0.06,
        },
        index * 1 + 1.6
      );

      tl.to(
        digits,
        {
          opacity: 0,
          duration: 0.3,
        },
        index * 1 + 2.2
      );
    });

    // Spinner fade
    tl.to(".spinner", {
      opacity: 0,
      duration: 0.3,
    });

    // Words in
    tl.to(".word h1", {
      y: "0%",
      opacity: 1,
      duration: 1,
    });

    // Divider
    tl.to(".divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () =>
        gsap.to(".divider", {
          opacity: 0,
          duration: 0.4,
          delay: 0.3,
        }),
    });

    // Words out
    tl.to("#word-1 h1", {
      y: window.innerHeight,
      duration: 1,
      delay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: -window.innerHeight,
        duration: 1,
      },
      "<"
    );

    tl.to(".word", {
      opacity: 0,
      duration: 0.4,
    });

    // Shutter exit
    tl.to(".block", {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
      onComplete: () => setLoading(false), // 👈 hide loader
    });
  }, []);

  return (
    <main className="relative">
      {/* Loader */}
      {loading && (
        <div className="loader fixed top-0 left-0 w-screen h-screen overflow-hidden z-20">
          <div className="overlay absolute top-0 left-0 w-full h-full flex">
            <div className="block"></div>
            <div className="block"></div>
          </div>

          <div className="intro-logo absolute top-1/2 left-1/2 flex gap-1 transform -translate-x-1/2 -translate-y-1/2">
            <div className="word " id="word-1">
              <h1><span>Hello</span></h1>
            </div>
            <div className="word " id="word-2">
              <h1 className="italic ">World!</h1>
            </div>
          </div>

          <div className="divider absolute top-0 left-1/2 w-px h-full bg-white transform -translate-x-1/2"></div>

          <div className="spinner-container absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
            <div className="spinner"></div>
          </div>

          <div className="counter  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {[
              ["0", "0"],
              ["4", "6"],
              ["7", "8"],
              ["9", "9"],
            ].map((pair, i) => (
              <div
                className="count  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex"
                key={i}
              >
                {pair.map((digit, j) => (
                  <div className="digit flex-1 pt-4" key={j}>
                    <h1>{digit}</h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}



      {!loading &&
        <div className="">

          {/* Background Gradient & Shadow */}
          <img
            className="absolute top-0 right-0 opacity-60 -z-10"
            src="/gradient.png"
            alt="Gradient-img"
          />
          <div className="h-4 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[10deg] blur-3xl -z-10"></div>


          {/* Header (only shows after loading) */}
          <Header />
          <Hero></Hero>

          {/* Macbook animation */}

        
            <Skills />

          <section className="relative w-full h-screen overflow-hidden bg-black">
            <h1 className="text-white text-4xl font-semibold text-center items-center justify-center my-4">Scroll on the <span className="text-transparent bg-gradient-to-r from-[#e99b63] via-white to-[#e99b63] bg-clip-text bg-[length:200%_200%] animate-gradient-loop font-semibold ">
  Laptop
</span>
 </h1>
            <Canvas
              camera={{ fov: 12,
                 position: [0, 5, 200],
                 aspect: window.innerWidth / window.innerHeight // Responsive aspect ratio
                 }}
              className="!absolute !top-0 !left-0 !w-full !h-full"
            >
              <Environment
                files={[
                  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
                ]}
              />
              <ScrollControls pages={3} damping={0.3}>
                <MacContainer />
              </ScrollControls>
            </Canvas>
          </section>



        </div>
      }


    </main>
  );
};

export default App;
