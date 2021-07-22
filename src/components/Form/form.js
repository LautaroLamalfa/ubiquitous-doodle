import React from "react"
import { Input } from "../Input/Input";

export const Form = ({ formInput, onInput }) => {

    return (
        <form>
            {formInput.map(({ label, name, value }, index) => (
                <Input key={index} label={label} name={name} onInput={onInput} value={value} />
            ))}
        </form>
    )
}