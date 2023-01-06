import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {


    const { images, isLoading} = useFetchGifs ({ category} );

    return (
        <>
        
            <h3>{category}</h3>
            { 
                //IF corto con 1 sola condicion(AND LOGICO)
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( (image) =>(
                        <GifItem 
                        key={ image.id }

                        // title={ image.title }
                        // url={ image.url }
                        
                        //Lo que hago es esparcir todas las props en ves de una por una como arriba
                        { ...image }
                        />
                    ))
                }
                
            </div>
        </>
    )
}