import Head from "next/head";
import Octagon from "../components/Octagon";
import landingPageData from "../public/data/landingPageData";
import Link from "next/link";
import Gallery from "../components/Gallery";
import Backdrop from "../components/Backdrop";
import { useState } from "react";

const Home: React.FC = () => {
  const octagonImages = landingPageData.octagon;
  const galleryImages = landingPageData.gallery;
  const [photoInfo, setPhotoInfo] = useState<{
    key: number;
    photo: StaticImageData;
    size: string;
    country: string;
    city: string;
    location: string;
    alt: string;
    description: string;
    }>();

  return (
    <div>
      <Head>
        <title>SeeTheWorld!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <section className="flex flex-col justify-center pt-24 pb-8 md:flex-row">
          <div className="flex justify-center items-center pb-7 md:px-9 md:pb-0">
            <Octagon photos={octagonImages} />
          </div>

          <div className="px-2.5 text-center flex flex-col items-center md:py-7 md:pr-9 md:justify-center">
            <h2 className="font-bold text-2xl pb-3 text-gray-900">
              Explore the World through Photography!
            </h2>
            <p className="pb-2 text-gray-900">
              At See the World, you will be able to explore the world through
              photos. You can click each photo in the gallery to discover more
              about the place you are seeing
            </p>
            <p className="pb-2 text-gray-900">
              If you are interested in knowing more about the creator of this
              page, please visit the{" "}
              <Link href="/About">
                <a className="font-bold hover:text-yellow-400 hover:underline">
                  About
                </a>
              </Link>{" "}
              or the{" "}
              <Link href="/Contact">
                <a className="font-bold hover:text-yellow-400 hover:underline">
                  Contact
                </a>
              </Link>{" "}
              page{" "}
            </p>
            <p className="pb-2 text-gray-900 italic">See a preview below or</p>
            <div className="flex py-3">
              <Plane />
              <Link href="/SearchCountries">
                <a className="font-bold pl-2.5 flex items-center hover:text-yellow-400 hover:underline">
                  Choose a country to explore
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <Gallery photos={galleryImages} setPhotoInfo={setPhotoInfo} />
          <Backdrop photoInfo={photoInfo} setPhotoInfo={setPhotoInfo} />
        </section>
      </main>
    </div>
  );
}

function Plane(props: { [index: number]: string }) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      width="2rem"
      fill="none"
      key="100"
      xmlns="http://www.w3.org/2000/svg"
      className="transform rotate-90"
    >
      <path
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        fill="#FDE68A"
        stroke="#FBBF24"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Home
