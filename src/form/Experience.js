import React from 'react'

export default function Experience() {
    
  return (
    <div>
        <div className='input-group'>  
      <label htmlFor="">  Select Your Domain: </label> 
      <select name="domain">
        <option value="React Developer"> React Developer </option>
        <option value="Angular Developer">Angular Developer </option>
        <option value="Android Developer">Android Developer</option>
        <option value="Python Developer"> Python Developer</option>
      </select>
      </div>

      
      <div className="input-group">
        <label htmlFor="username"> Years of Experience: </label>
        <input type="number"
          name="years"
          placeholder='Your Experience is valuable for us' />
      </div>

      <div className='input-group'>
      <label htmlFor=""> Upload Your CV: </label>
      <input type="file" id="myFile" name="filename" />
      </div>

      <div className='input-checkbox'>
      <input type = "checkbox" name = "conditions" />
      <label htmlFor="" className='text'> Terms & Conditions </label>
      </div>
      
    </div>

  )
}
