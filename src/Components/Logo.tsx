import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image src="/cocktail_finder.jpg" alt="Logo" width={40} height={40} />
    </div>
  );
};

export default Logo;
