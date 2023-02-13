import React from 'react'

function InputField({labelName, inputProps}) {
    return (
        <div className='col-6'>
            <label>{labelName}</label>
            <input 
            type='text' 
            className='form-control' 
            {...inputProps}
            />
        </div>
    )
}

export default InputField
