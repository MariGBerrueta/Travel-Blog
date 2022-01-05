import Image from "next/image";

const Gallery = ({ photos, setPhotoInfo }) => {
  const photoSpan = (photo) => {
    if (photo.size === "large") {
      return "photoGallery row-span-2 flex justify-center";
    } else if (photo.size === "panoramic") {
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
        {photos.map((item, i) => {
          return (
            <div
              className={photoSpan(item)}
              key={i}
              onClick={() => {
                setPhotoInfo([
                  item.index,
                  item.photo,
                  item.size,
                  item.country,
                  item.city,
                  item.location,
                  item.location,
                  item.description,
                ]);
              }}
            >
              <Image
                src={item.photo}
                index={item.index}
                alt={item.alt}
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
