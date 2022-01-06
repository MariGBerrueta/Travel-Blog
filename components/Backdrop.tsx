import Image from "next/image";

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
  photoInfo: Photo | undefined
  setPhotoInfo: React.Dispatch<React.SetStateAction<Photo | undefined>>
}

const Backdrop: React.FC<Props> = ({ photoInfo, setPhotoInfo }) => {
  //container styles
  let containerStyle = "flex flex-col items-center justify-content h-screen";
  const cNormal = containerStyle + " lg:flex-row";
  const cLarge = containerStyle + " sm:flex-row";
  //first box styles
  let firstBoxStyle = "h-1/2 w-full p-4 flex items-center justify-center sm:p-0 lg:w-2/5 lg:ml-8 lg:mr-3 lg:py-8 lg:px-0";
  const fNormal = firstBoxStyle + " sm:py-6 sm:h-full sm:ml-6 sm:mr-3";
  const fLarge = firstBoxStyle + " mt-8 sm:mt-6 lg:h-full";
  // second box styles
  let secondBoxStyle = "w-full h-1/2 p-4 mb-2 lg:w-3/5 lg:mr-8 lg:ml-3 lg:p-0";
  const sNormal = secondBoxStyle + " sm:h-3/4 sm:ml-3 sm:mr-6 sm:p-0";
  const sLarge = secondBoxStyle + " sm:pb-0 sm:mb-6 sm:px-6 ms:pt-6 lg:h-3/4";
  //text box styles
  let textStyle = "text-gray-50 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center mb-2 h-1/3 sm:h-1/4 lg:h-1/5";
  const tNormal = textStyle + " sm:justify-evenly lg:flex-row";
  const tLarge = textStyle + " text-center sm:flex-row sm:justify-around";

  //creates styles depending on photo size
  function createStyle(largeSize: string, normalSize: string): string {
    if (photoInfo && photoInfo.size === "large") {
      return largeSize
    }
    return normalSize
  }

  //Conditional render
  if (
    photoInfo
  ) {
    return (
      <div className="fixed z-50 transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 bg-gray-900 bg-opacity-70 h-screen w-screen">

        <div
          className="absolute w-6 top-3 right-4 z-50 sm:top-4 sm:right-8 sm:w-8"
          onClick={() => {
            setPhotoInfo(undefined);
          }}
        >
          <Close />
        </div>
        <div className={createStyle(cLarge, cNormal)}>
          <div className={createStyle(fLarge, fNormal)}>
            <div className="relative h-full w-full">
              <Image
                src={photoInfo.photo}
                key={photoInfo.key}
                alt={photoInfo.alt}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
          </div>

          <div className={createStyle(sLarge, sNormal)}>
            <div className={createStyle(tLarge, tNormal)}>
              <h1>
                <span className="font-semibold">Country:</span> {photoInfo.country}
              </h1>
              <h1>
                <span className="font-semibold">City:</span> {photoInfo.city}
              </h1>
              <h1>
                <span className="font-semibold">Location:</span>{" "}
                {photoInfo.location}
              </h1>
            </div>
            <div className="p-4 text-justify text-gray-900 bg-yellow-400 bg-opacity-90 h-2/3 overflow-y-auto scrollbar scrollbar-thumb-yellow-300  scrollbar-thumb-rounded-full sm:h-3/4 lg:h-4/5">
              <p className="mr-3">{photoInfo.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }

};

const Close = (props: { [index: number]: string }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        fill="#FBBF24"
        stroke="#F9FAFB"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Backdrop;
