import React, {FC, useCallback, useContext} from "react";
import {FlexRow} from "../Flex";
import { TiDelete } from "react-icons/ti";
import './search.css';
import {SearchContext} from "../../../contexts/SearchContext";


interface IProps {

}

export const Search: FC<IProps> = (props: any) => {
    const {value, setValue} = useContext(SearchContext)!;
    const onChange = useCallback((event: {target: {value: string}}) => {
            setValue(event.target.value);

    }, [setValue]);

    const onClear = useCallback(() => {
        setValue("");
    }, [setValue])

    return (
        <FlexRow
            className={'search'}
            width="100%"
            padding={'10px'}
            justifyContent="center"
            gap={'10px'}
        >
            <input type="text" placeholder={'search'} value={value} onChange={onChange} />
            <TiDelete className={'clear-icon'} size={'24px'}  onClick={() => onClear()} />
        </FlexRow>
    )
}