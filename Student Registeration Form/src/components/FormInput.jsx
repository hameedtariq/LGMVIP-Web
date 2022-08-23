import React from 'react'
import './FormInput.css'

const FormInput = ({id,className,value,label, type="text",onInput,noOfFields = 1, name, inputNameSet}) => {
    let arr = [];
    for(let i = 0; i < noOfFields; i++){
        arr.push(<span><input type={type} value={value} id={id} onChange={onInput} name={name}/> {inputNameSet ? inputNameSet[i] : ""}</span>)
    }

  return (
    <div className={`formInput ${className}`}>
        <label for={id}>{label}</label>
        {arr}        
    </div>
  )
}

export default FormInput