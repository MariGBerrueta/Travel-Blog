import Image from 'next/image';
import { useState, useEffect } from 'react';



const Octagon = ({images}) => {

    const [image, setImage] = useState(images[0].source);
    const [index, setIndex] = useState(1);


    useEffect( () => {
            setTimeout( () => {
                if (index < (images.length - 1)) {
                    setIndex(index + 1);
                    setImage(images[index].source); 
                }  else {
                    setIndex(0);
                    setImage(images[index].source); 
                }
            }, 8000)
    }, [index]);

    return (
        <div className='octagonMargin'>
            <div className='octagonImage bg-yellow-200'>
                <Image 
                    src={image}
                    key={index}
                    layout="fill"
                    objectFit="cover"
                    object-position="50% 50%"
                    placeholder="blur"
                    className="animation"
                />
            </div>
        </div>
    )
}

export default Octagon