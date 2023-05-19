import { BannerProps } from '../../interfaces/BannerProps'
import './Banner.css'

const Banner = ({enderecoImagem, textoAlternativo}: BannerProps) => {
    return (
        <header>
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner