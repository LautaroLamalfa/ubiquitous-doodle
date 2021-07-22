import React from 'react'

export const Input = ({ label, name, onInput }) => {
    return (
        <label>
            {label}
            <input name={name} type="text" onChange={onInput} />
        </label>
    )
}