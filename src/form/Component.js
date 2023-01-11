import React from 'react'
import { useState } from 'react'
import Education from './Education';
import Experience from './Experience';
import Information from './Information';

export default function Component() {
    // const [Name, SetName] = useState("");

    const [Page, SetPage] = useState(0);
    const [FormData, SetFormData] = useState({
        name: "",
        lastname: "",
        email: ""
    });
    
    const FormTitles = ["Personal Information", "Education", "Experience"];
    const PageDisplay = () => {
        if (Page === 0) {
            return <Information FormData={FormData} SetFormData={SetFormData} />;
        } else if (Page === 1) {
            return <Education />;
        } else {
            return <Experience />;
        }
    }

    return (
        <div>
           
            <div class="form-step form-step-active">
                <h1 className='text-align'> {FormTitles[Page]}</h1>
                <div className="progressbar">
                <div style={{ width: Page === 0 ? "33.3%" : Page === 1 ? "66.6%" : "100%" }}></div>
            </div>
                <div className='data'>  {PageDisplay()}</div>
                <div className="btns-group">
                    <button className='btn btn-prev'
                     disabled={Page === 0}
                        onClick={() => {
                            SetPage((CurrPage) => CurrPage - 1)
                        }} > Back </button>
                    <button className='btn btn-next'
                        onClick={() => {
                            if (Page === FormTitles.length - 1){
                                alert("Form Submitted!");
                                console.log(FormData);
                            }else{
                            SetPage((CurrPage) => CurrPage + 1)

                            }
                        }}>
                        {Page === FormTitles.length-1 ? "Submit" : "Next"}
                    </button>

                </div>
            </div>

        </div>
    )
}
