import React from "react";
import Image, { StaticImageData } from "next/image";

interface IButtonProps {
  text?: string;
  icon?: StaticImageData;
  className: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<IButtonProps> = ({
  text,
  icon,
  className,
  onClick,
  style,
}) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {icon ? (
        <Image src={icon} alt="Arrow Icon" width={24} height={24} />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
