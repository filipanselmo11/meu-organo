import { Colaborador } from "./Colaborador";

export interface TimeProps {
    corPrimaria: string
    nome: string
    corSecundaria: string
    colaboradores: Colaborador[]
}