import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Gallery from '../../components/Gallery'
import Backdrop from '../../components/Backdrop'
import landingPageData from "../../public/data/landingPageData";

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

const Country: React.FC = () => {
    const [photoInfo, setPhotoInfo] = useState<Photo>();
    const [imagesByCountry, setImagesByCountry] = useState<Photo[]>()
    const [currentCountry, setCurrentCountry] = useState<string>()
    const router = useRouter();
    const allPhotos = landingPageData.gallery

    useEffect(() => {
        if (router.query.country) {
        let country : string = router.query.country.toString()
        setCurrentCountry(country)
        }
    }, [router]);

    useEffect(() => {
        if (currentCountry) {
            let photosByCountry: Photo[] = [];
            allPhotos.forEach( photo => {
                if (photo.country == currentCountry) {
                    photosByCountry.push(photo)
                }
            })
            setImagesByCountry(photosByCountry)
        }

    }, [currentCountry, allPhotos])

    return (
        <div>
            <h1 className='pt-20 text-8xl font-bold text-gray-900 text-center py-10 hover:text-yellow-400'>{currentCountry}</h1>
            <Gallery photos={imagesByCountry} setPhotoInfo={setPhotoInfo} />
            <Backdrop photoInfo={photoInfo} setPhotoInfo={setPhotoInfo} />
        </div>
    )
}

export default Country