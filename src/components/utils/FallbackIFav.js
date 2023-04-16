import { useEffect, useState } from "react";
import Image from "next/image";

export const FallbackFav = ({ src, alt, key }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      key={key}
      src={imgSrc ? imgSrc : "/defaultFav.png"}
      alt={alt}
      onError={() => {
        setImgSrc("/defaultFav.png");
      }}
    />
  );
};
