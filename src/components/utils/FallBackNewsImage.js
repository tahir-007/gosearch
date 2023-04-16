import { useEffect, useState } from "react";
import Image from "next/image";

export const FallBackNewsImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc ? imgSrc : "/defaultNewsImage.png"}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc("/defaultNewsImage.png");
      }}
    />
  );
};
