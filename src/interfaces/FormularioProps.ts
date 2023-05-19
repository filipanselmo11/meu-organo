import { Colaborador } from "./Colaborador"

export interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: Colaborador) => void
    times: string[]
}