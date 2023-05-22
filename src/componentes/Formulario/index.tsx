import React, { useState } from 'react'
import './Formulario.css'
import { FormularioProps } from '../../interfaces/FormularioProps'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props: FormularioProps) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setData('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2 style={{ color: '#00b4d8'}}>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Data de entrada"
                    placeholder="dd/mm/yyyy"
                    valor={data}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario