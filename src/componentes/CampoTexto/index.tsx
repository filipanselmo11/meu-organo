import './CampoTexto.css'
import { CampoTextoProps } from '../../interfaces/CampoTextoProps'
import React from 'react'

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo='text'}: CampoTextoProps) => {
    const placeHolderModificado = `${placeholder}...`
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={valor => aoDigitado(valor)}
                required={obrigatorio}
                placeholder={placeHolderModificado}
                type={tipo}/>
        </div>
    )
}

export default CampoTexto