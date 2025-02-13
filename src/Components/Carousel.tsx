"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Button from "./Button";
import { ISampleData } from "@/Constants/MockData";
import leftArrowIMG from "../../public/left-arrow.png";
import rightArrowIMG from "../../public/right-arrow.png";

interface EmblaCarouselProps {
  data: ISampleData[];
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ data }) => {
  const options: EmblaOptionsType = {
    loop: true,
    align: "center",
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full pt-16 ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex select-none">
          {data.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                className={`flex flex-col items-center justify-center shrink-0 basis-[80%] sm:basis-[60%] md:basis-[40%] px-2  ${
                  isActive ? " -translate-y-4 z-10" : "scale-100 z-0 opacity-70"
                }`}
                key={index}
              >
                <div className="rounded overflow-hidden shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={200}
                    height={300}
                    className="object-cover"
                  />
                </div>
                {isActive && (
                  <>
                    <p className="pt-8 font-bold text-xl">{item.name}</p>
                    <p className="">{item.description}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Button
        icon={leftArrowIMG}
        className="absolute top-1/2  p-[10px]  md:p-[20px]  left-8 md:left-1/4 transform -translate-y-1/2 text-white rounded-full border border-black 
             transition duration-300 hover:bg-gray-200 hover:scale-110 hover:border-gray-600"
        onClick={scrollPrev}
      />

      <Button
        icon={rightArrowIMG}
        className="absolute top-1/2 p-[10px]  md:p-[20px] right-8 md:right-1/4 transform -translate-y-1/2  text-white  rounded-full border border-black  transition duration-300 hover:bg-gray-200 hover:scale-110 hover:border-gray-600"
        onClick={scrollNext}
      />
    </div>
  );
};

export default EmblaCarousel;
