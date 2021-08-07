import React from 'react'
import resume from '../../assets/Resume.pdf';
import "./style.scss";
const CV = () => {
    return (
        <div className="cv">

            <h1 className="headingText mb-0">CURICULAR VITAE</h1>
            <hr className="line mb-4" />
            <embed src={resume} height="100%" width="100%"></embed>
        </div>
    )
}

export default CV
