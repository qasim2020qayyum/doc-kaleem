import React from 'react'

const Hero2 = () => {
  return (
<>
<div className="patientName">
               <h1>Patient:<span className='name'>Mr.Tracy Toliver</span></h1>
               </div>
<div className="hero">
    
<div className="hero1">
    <div className="title1">
        <h3 className='titleHead'>Diagnosis/Diseases</h3>
        </div>
        <div className="detail1">
            <div className="date">Date</div>
            <div className="diagnosis">Diagnosis</div>
            <div className="severity">Severity</div>
            <div className="source">Source</div>
            </div>
    </div>
    <div className="hero2">
        <div className="currentPatient">
    <h5>Birthdate: 11/23/1984</h5>
    <h5>Sex: FeMale</h5>
    <h5>Address: 2693 Appleby In</h5>
    <h5>Phone#: 315-694-7207</h5>
    <h5>Family Doctor: Dr. Brandon Lee</h5>
    <h5>Blood Type: O</h5>
    <h5>Ethnicity: Caucasian</h5>
    <h5>Allergies: Peanuts</h5>
    <h5>Prescriptions: Aderall</h5>
    <h5>Coverage: OHIP</h5>
    </div>
    <div className="icons">
        <p className='reminder'>Send Reminders</p>
        <p className='record'>Edit Records</p>
        <p className='call'>Call</p>
        <p className='message'>Message</p>
        </div>
        </div>
        <div className="hero1">
        <div className="title1">
        <h3>Hospitilization/Treatments</h3>
        </div>
        <div className="detail1">
        <div className="date">Date</div>
            <div className="diagnosis">Diagnosis</div>
            <div className="severity">Severity</div>
            <div className="procedure">Procedure</div>
            <div className="provider">Provider</div>
            <div className="quantity">Quantity</div>
          
            </div>
            </div>
            </div>
</>
  )
}

export default Hero2