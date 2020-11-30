import React, { ChangeEvent, FC } from "react";

type Props = {
    value: number | string;
    onValueChange: (value: string) => void
    label?: string
    max?: number
    min?: number
}

const NumberInputField: FC<Props> = ({value, onValueChange, max, min}) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        // Value may be an empty string, and converting it to a number makes it 0
        // which is an unwanted effect
        const numberValue = Number(value)
        if (!value.length) {
            onValueChange(value)
        }
        else if (max && numberValue > max) {
            onValueChange(max.toString());
        }
        else if (min && numberValue < min) {
            onValueChange(min.toString());
        }
        else {
            onValueChange(value);
        }
    };
    return (
        <input type="number" value={value} onChange={onChange} />
    )
}

export default NumberInputField;