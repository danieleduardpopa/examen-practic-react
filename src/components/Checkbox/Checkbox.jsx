import React from 'react'

function Checkbox({ label, value, onChange}) {
  return (
    <label>
        <input  type='checkbox' checked={value} onChange={onChange}/>
        {label}
    </label>
  )
}

export default Checkbox
