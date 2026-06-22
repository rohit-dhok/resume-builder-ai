import React, { useState } from 'react'

function PersonalInfoForm({personalInfo, setPersonalInfo}) {

  function handleChange(e) {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="form-section">
      <h3 className="section-title">Personal Information</h3>
      <div className="section-divider"></div>

      <div className="form-ro">
        <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" name="fullname" onChange={handleChange} value={personalInfo.fullname}/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" onChange={handleChange} value={personalInfo.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" onChange={handleChange} value={personalInfo.phone}/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="address" onChange={handleChange} value={personalInfo.location}/>
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="text" name="linkedin" id="linkedin" onChange={handleChange} value={personalInfo.linkedin}/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="summary">Personal Summary</label>
          <textarea name="summary" id="summary" onChange={handleChange} value={personalInfo.summary}></textarea>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoForm