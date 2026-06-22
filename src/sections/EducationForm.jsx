import React, { useState } from 'react'

function EducationForm({education, setEducation}) {
  function handleChange(index, e) {
    const updated = [...education];
    updated[index][e.target.name] = e.target.value;
    setEducation(updated);
  }

  function addEducation() {
    setEducation([
      ...education,
      {school: "", degree: "", start_date: "", end_date: ""}
    ]);
  }

  function deleteEducation(index) {
    const updated = education.filter((edu, idx) => index !== idx);
    setEducation(updated);
  }

  return (
    <div className="form-section">
      <h3 className="section-title">Education</h3>
      <div className="section-divider"></div>

      {education.map((edu, index) => (
        <div key={index}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="school">School / University</label>
              <input type="text" name="school" value={edu.school} onChange={(e) => handleChange(index,e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <input type="text" name="degree" value={edu.degree} onChange={(e) => handleChange(index,e)}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="">Start Date</label>
              <input type="date" name="start_date" id="" value={edu.start_date} onChange={(e) => handleChange(index,e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="">End Date</label>
              <input type="date" name="end_date" id="" value={edu.end_date} onChange={(e) => handleChange(index,e)}/>
            </div>
          </div>

          <div className="form-btn">
            <button type="button" onClick={() => deleteEducation(index)}>Remove this entry</button>
          </div>
        </div>
      ))}

      <div className="section-divider"></div>
      <div className="form-btn">
        <button type="button" onClick={addEducation}>+ Add Another Education</button>
      </div>
    </div>
  )
}

export default EducationForm