import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  photos: Array<{
    source: StaticImageData;
    key: number}>
}

const Octagon: React.FC<Props> = ({ photos }) => {
  const [photo, setPhoto] = useState(photos[0]);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let startAnimation: ReturnType<typeof setTimeout> = setTimeout(() => {
      if ( currentIndex < (photos.length - 1) ) {
        setCurrentIndex(currentIndex + 1);
        setPhoto(photos[currentIndex]);
      } else {
        setCurrentIndex(0);
        setPhoto(photos[currentIndex]);
      }
    }, 8000);

    startAnimation

    return () => { clearTimeout(startAnimation) }
  }, [currentIndex, photos]);

  return (
    <div className="octagonMargin">
      <div className="octagonImage bg-yellow-200">
        <Image
          src={photo.source}
          alt="landscape image"
          key={photo.key}
          layout="fill"
          objectFit="cover"
          object-position="50% 50%"
          placeholder="blur"
          className="animation"
        />
      </div>
    </div>
  );
};

export default Octagon;
