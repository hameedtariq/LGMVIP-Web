import React from 'react'
import FormInput from './FormInput'
import './Form.css'
import { useReducer } from 'react'

const defaultState = {name: "",email: "", website: "", image: "", gender: 'Male', skills: []};

const reducer = (state, action)=> {
  switch(action.type){
    case 'update':
      return {...state, [action.id]: action.value};
    case 'reset':
      return defaultState;
    default:
      break;
  }
}

const Form = ({addRecord}) => {
  const [formData, dispatch] = useReducer(reducer, defaultState);
  const onInput = (e)=> {
    dispatch({
      type: "update",
      id: e.target.id,
      value: e.target.value,
    })
  }
  const onGender = (e) => {
    dispatch({
      type: "update",
      id: 'gender',
      value: e.target.value,
    })
  }
  const onSkills = (e) => {
    const skill = formData.skills.includes(e.target.value) ? formData.skills.filter((val) => val !== e.target.value) : [...formData.skills, e.target.value];
    console.log(skill);
    dispatch({
      type: "update",
      id: 'skills',
      value: skill,
    })
  }
  return (
    <div className='formContainer'>
        <form>
          <FormInput label="Name" id="name" value={formData.name} onInput={onInput}/>
          <FormInput label="Email" id="email" value={formData.email} onInput={onInput} type="email"/>
          <FormInput label="Website" id="website" value={formData.website} onInput={onInput} type="url"/>
          <FormInput label="Image Url" id="image" value={formData.image} onInput={onInput} type="url"/>
          <div className={`formInput`}>
              <label for="gender">Gender</label>
              <form id='gender' className='options'>
                <span><input type="radio" name='gender' value='Male' onChange={onGender} checked/>Male</span>
                <span><input type="radio" name='gender' value='Female' onChange={onGender}/>Female</span>
              </form>              
          </div>
          <div className={`formInput`}>
              <label for="skills">Skills</label>
              <form id='skills' className='options'>
                <span><input type="checkbox" value='HTML' onChange={onSkills}/>HTML</span>
                <span><input type="checkbox" value='CSS' onChange={onSkills}/>CSS</span>
                <span><input type="checkbox" value='JavaScript' onChange={onSkills}/>JavaScript</span>
              </form>
          </div>

          <div className="formControls">
            <button className='success' onClick={(e) => {e.preventDefault(); addRecord(formData)}}>Enroll Student</button>
            <button className='secondary' onClick={(e)=> {e.preventDefault();dispatch({type: 'reset'})}}>Clear</button>
          </div>
        </form>
    </div>
  )
}

export default Form