import React from 'react'

export default function Education() {
  return (
    <div>
      <div className="input-group">
        <label htmlFor="username"> Enter Your Percentage (%):  </label>
        <input type="number"
          name="percentage"
          placeholder='Your Percentage ' />
      </div>

      <div className='input-group'>  
      <label htmlFor=""> Select your Stream: </label> 
      <select name="courses">
        <option value="B.tech (Computer Engineering)">B.tech (CSE)</option>
        <option value="B.tech (Electrical Engineering)">B.tech (ECE)</option>
        <option value="B.tech (Civil Engineering)">B.tech (Civil Engineering)</option>
        <option value="B.tech (Mechanical Engineering)"> B.tech (Mechanical Engineering) </option>
      </select>
      </div>

      <div className="input-group">
        <label htmlFor="username"> Enter Your University/College Name:  </label>
        <input type="text"
          name="college"
          placeholder='College Name ' />
      </div>

      <div className='input-group'>  
      <label htmlFor=""> Graduated Year: </label> 
      <select name="year">
        <option value="2020">2020 </option>
        <option value="2021">2021 </option>
        <option value="2022">2022 </option>
        <option value="2023"> 2023 </option>
      </select>
      </div>

    </div>
  )
}
