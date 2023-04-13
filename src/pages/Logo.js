import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex justify-center mt-16 ">
      <div className="flex justify-center w-5/12">
        <Image
          src="/gosearch.png"
          alt="goSearch image"
          width={300}
          height={100}
        ></Image>
      </div>
    </div>
  );
};

export default Logo;
