import { Option } from '../Option/Option';

export interface SelectProps {
    key: string
    selectName: string
    options: any[]
}

export const Select: React.FC<SelectProps> = ({ options, selectName }) => {

    const getNameForOptions = () => {
        switch (selectName) {
            case "author":
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} name={option.authorName + " " + option.authorName}/>
                    ))
                )
            case "genres":
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} name={option.genreName}/>
                    ))
                )
        }
    }

    return (
        <div>
            <select name={selectName} id={selectName}>
                {
                    getNameForOptions()
                }
            </select>
        </div>
    )
}