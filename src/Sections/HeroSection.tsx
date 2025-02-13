"use client";

import Image from "next/image";
import React from "react";
import AnimatedArrow from "@/Utils/AnimatedArrow"

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <Image
        src="/HeroSectionImage1.webp"
        alt="Cocktail Hero Section"
        fill
        className="absolute inset-0 -z-10 object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <h1 className="relative text-6xl text-white font-bold text-center font-gothic">
        Welcome to Cocktails
      </h1>

      <AnimatedArrow />
    </div>
  );
};

export default HeroSection;
