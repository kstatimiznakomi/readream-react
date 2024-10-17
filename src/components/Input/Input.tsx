interface InputProps {
    value?: string
    type?: string
    name?: string
    id?: string
    className?: string
    onInput?: void
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
}

export const Input: React.FC<InputProps> = ({
                                                onKeyUp,
                                                onKeyDown,
                                                onChange,
                                                value,
                                                type,
                                                name,
                                                id,
                                                className,
                                                onInput,
                                                placeholder
                                            }) => {
    return (
        <input onKeyDown={onKeyDown} onKeyUp={onKeyUp} onChange={onChange} className={className} type={type} id={id}
               name={name} value={value}
               placeholder={placeholder}/>
    )
}