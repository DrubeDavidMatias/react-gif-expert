import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
 
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);


    const getImages = async() => {
        const newImages = await getGifs ( category );
        setimages(newImages);
        setisLoading(false);
    }

    //este hook solo se esta ejecutando la primera vos por el segundo argumento es un arreglo vacio, es la menra de indicarlo
    useEffect( () =>{
        getImages();
    }, []);


    return {
        images,
        isLoading
    }
}
