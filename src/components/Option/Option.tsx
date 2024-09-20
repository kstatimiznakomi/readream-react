export interface OptionProps {
    key: number
    id: number
    text: string
}

export const Option: React.FC<OptionProps> = ({text, id}) => {
    return (<option value={id}>{text}</option>)
}