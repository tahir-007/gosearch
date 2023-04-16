import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex justify-center my-14">
      <Image
        src="/gosearch.webp"
        alt="goSearch image"
        width={300}
        height={100}
      ></Image>
    </div>
  );
};

export default Logo;
