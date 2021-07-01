import Dvd from '../../Assets/Imagenes/Dvd.jpg'  
import Sofa from '../../Assets/Imagenes/Sofa.jpg'  
import Television from '../../Assets/Imagenes/Television.jpg'

export const One =() => {
    return(
        <img className='Dvd' src={Dvd} alt='Foto'/>
    )
} 

export const Two =() => {
    return(
        <img src={Sofa} alt='Foto'/>
    )
}
export const Three =() => {
    return(
        <img className='Television' src={Television} alt='Foto'/>
    )   
}