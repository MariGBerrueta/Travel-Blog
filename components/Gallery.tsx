import Image from "next/image";
import {useState, useEffect} from "react"

interface Photo {
  key: number;
  photo: StaticImageData;
  size: string;
  country: string;
  city: string;
  location: string;
  alt: string;
  description: string;
}

interface Props {
  photos: Array<Photo> | undefined
  setPhotoInfo: React.Dispatch<React.SetStateAction<Photo | undefined>>
}

const Gallery: React.FC<Props> = ({ photos, setPhotoInfo }) => {
  const [currentPhotos, setCurrentPhotos] = useState<Photo[]>([])

  useEffect(() => {
    if (photos) {
      setCurrentPhotos(photos)
    }
  }, [photos])

  const photoSpan = (photoSize: string) => {
    if (photoSize === "large") {
      return "photoGallery row-span-2 flex justify-center";
    } else if (photoSize === "panoramic") {
      return "photoGallery col-span-2 row-span-2 flex justify-center";
    } else {
      return "photoGallery flex justify-center";
    }
  };

  return (
    <div>
      <div className="bg-yellow-400 -mb-0.5 p-3 text-center">
        <p className="text-gray-900 underline font-bold">
          Click on the picture to know more about the place you are seeing
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-14 grid-flow-row-dense gap-3 px-3 py-3 bg-yellow-200 md:grid-cols-3 md:px-6 md:py-6 lg:grid-cols-4 xl:grid-cols-5">
        {currentPhotos.map((photo, i) => {
          return (
            <div
              cy-data={`photo${photo.key}`}
              className={photoSpan(photo.size)}
              key={photo.key}
              onClick={() => {
                setPhotoInfo({
                  key: photo.key,
                  alt: photo.alt,
                  photo: photo.photo,
                  size: photo.size,
                  country: photo.country,
                  city: photo.city,
                  location: photo.location,
                  description: photo.description,
                });
              }}
            >
              <Image
                src={photo.photo}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                object-position="50% 50%"
                placeholder="blur"
                className="hover:opacity-80"
              />
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-400 h-10 -mt-0.5"></div>
    </div>
  );
};

export default Gallery;
