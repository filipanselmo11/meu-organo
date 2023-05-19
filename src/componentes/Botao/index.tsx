import { BotaoProps } from '../../interfaces/BotaoProps'
import './Botao.css'

const Botao = (props: BotaoProps) => {
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao