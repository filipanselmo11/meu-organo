import './Colaborador.css'
import { ColaboradorProps } from '../../interfaces/ColaboradorProps'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, data}: ColaboradorProps) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h4>{cargo}</h4>
                <h4>{new Date(data).toLocaleDateString()}</h4>
            </div>
        </div>
    )
}

export default Colaborador