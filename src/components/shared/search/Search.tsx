import React, {FC, SyntheticEvent, useCallback, useState} from "react";
import {FlexRow} from "../Flex";
import { TiDelete } from "react-icons/ti";
import './search.css';

export const Search: FC = (props: any) => {
    const [value, setValue] = useState<string>("");
    console.log('RENDER');

    const onChange = useCallback((event: {target: {value: string}}) => {
            setValue(event.target.value);

    }, []);

    const onClear = useCallback(() => {
        setValue("");
    }, [])

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