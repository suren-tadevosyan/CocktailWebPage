import Image from "next/image";
import React from "react";

interface IMainScreenSectionProps {
  children?: React.ReactNode;
}

const MainScreenSection: React.FC<IMainScreenSectionProps> = ({ children }) => {
  return (
    <div className="w-full   flex flex-col items-center relative ">
      <Image
        src="/mainSectionIMG.png"
        alt="Background Main Section"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]  "
      />
      {children}
    </div>
  );
};

export default MainScreenSection;
