interface InputProps {
    value?: string
    type?: string
    name?: string
    id?: string
    className?: string
    onInput?: void
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const Input: React.FC<InputProps> = ({onChange, value, type, name, id, className, onInput, placeholder}) => {
    return (
        <input onChange={onChange} className={className} type={type} id={id} name={name} value={value}
               placeholder={placeholder}/>
    )
}