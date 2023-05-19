export interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    itens: string[]
    obrigatorio: boolean
}