export interface OptionProps {
    key: number
    id: number
    name: string
}

export const Option: React.FC<OptionProps> = ({ name, id }) => {
    return (
            <option value={id}>{name}</option>
    )
}