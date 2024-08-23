interface InputProps {
    value?: string
    type?: string
    name?: string
    id?: string
    className?: string
    onInput?: void
    placeholder?: string
    
}

export const Input: React.FC<InputProps> = ({ value, type, name, id, className, onInput, placeholder }) => {
    return (
        <input className={className} type={type} id={id} name={name} value={value} placeholder={placeholder} />
    )
}