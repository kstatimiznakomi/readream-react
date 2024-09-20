import {CriteriaTypes} from '../../enums/enum';
import {Option} from '../Option/Option';
import React, {ChangeEventHandler} from "react";

export type SelectProps = {
    key: string
    id: string
    selectName: CriteriaTypes
    value?: string
    options: any[]
    className?: string
    onChange?: ChangeEventHandler<HTMLSelectElement> | undefined
}

export const Select: React.FC<SelectProps> = ({value, options, selectName, id, className, onChange}) => {

    const getCriteriesForOptions = () => {
        switch (selectName) {
            case CriteriaTypes.Authors:
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} text={option.authorLastName + " " + option.authorName}/>
                    ))
                )
            case CriteriaTypes.Genres:
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} text={option.genreName}/>
                    ))
                )
            case CriteriaTypes.Publishers:
                return (
                    options.map((option) => (
                        <Option key={option.id} id={option.id} text={option.publisherName}/>
                    ))
                )
        }
    }

    return (
        <select value={value} onChange={onChange} className={className} name={selectName.toString()} id={id}>
            <Option id={0} text={'Выбрать пункт'} key={0}/>
            {getCriteriesForOptions()}
        </select>
    )
}