import { CriteriaTypes } from '../../enums/enum';
import { Option } from '../Option/Option';

export interface SelectProps {
    key: string
    id: string
    selectName: CriteriaTypes
    options: any[]
    className?: string
}

export const Select: React.FC<SelectProps> = ({ options, selectName, id, className }) => {

    const getCriteriesForOptions = () => {
        switch (selectName) {
            case CriteriaTypes.Authors:
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} name={option.authorLastName + " " + option.authorName}/>
                    ))
                )
            case CriteriaTypes.Genres:
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} name={option.genreName}/>
                    ))
                )
            case CriteriaTypes.Publishers:
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} name={option.publisherName}/>
                    ))
                )
        }
    }

    return (
            <select className={className} name={selectName.toString()} id={id}>
                { getCriteriesForOptions() }
            </select>
    )
}