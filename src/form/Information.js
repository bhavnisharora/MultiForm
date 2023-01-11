import React from 'react';
import { useState } from 'react'



export default function Information({ FormData, SetFormData }) {
    const [Email, SetEmail] = useState("");
    const HandleSubmit =(e)=>{
        e.preventDefault();
        console.log(Email);
    }

    return (
        <div>
            <form action="" onSubmit={HandleSubmit}>
            <div className= "input-group" >
                <label htmlFor="username"> Fullname </label>
                <input type="text"
                    name="username"
                    id="username"
                    placeholder='Enter Your Fullname' required/>
                    
                    {/* value={FormData.name} onChange={(event) => SetFormData({ ...FormData, name: event.target.value })} /> */}
            </div>

            <div className="input-group">
                <label htmlFor="username"> Email </label>
                <input type="email"
                    name="email"
                    value ={Email}
                    onChange={(e) => SetEmail(e.target.value)}
                    placeholder='Write your Email Id' />
            </div>
            <label htmlFor=""> Select your Gender: </label>
                <br />
            <div className='input-gender'>
                <label htmlFor="" className='male'> Male </label>
                <input type="radio" name='Male' value="male" />
                <label htmlFor="" className='female'> Female</label>
                <input type="radio" name='Female' value="female" />
  
            </div>

            <div className="input-group">
                <label htmlFor="dob"> Date of Birth </label>
                <input type="date"
                    name="dob"
                    id="dob" />
            </div>

            </form>

        </div>
    )
}
