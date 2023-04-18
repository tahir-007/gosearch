import { useEffect, useState } from "react";

export const FallBackImage = ({ src, alt, className, defaultImage }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc ? imgSrc : defaultImage}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc(defaultImage);
      }}
    />
  );
};
