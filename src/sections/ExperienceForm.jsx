import React, { useState } from 'react'

function ExperienceForm() {
  const [experiences, setExperiences] = useState([
    {job_title: "", company: "", start_date: "", end_date: "", description: ""}
  ]);
  
  
  function handleChange(index, e) {
    const updated = [...experiences];
    updated[index][e.target.name] = e.target.value;
    setExperiences(updated);
  }

  function addExperience() {
    setExperiences([
      ...experiences,
      {job_title: "", company: "", start_date: "", end_date: "", description: ""}
    ])
  }

  function deleteExperience(index) {
    const updated = experiences.filter((exp, idx) => idx !== index);
    setExperiences(updated);
  }

  return (
    <div className='form-section'>
      <h3 className="section-title">Experience</h3>
      <div className="section-divider"></div>
      
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="job_title">Job Title</label>
                <input type="text" name="job_title" id="" onChange={(e) => handleChange(index, e)} value={exp.job_title}/>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="" onChange={(e) => handleChange(index, e)} value={exp.company}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="start_date">Start Date</label>
                <input type="date" name="start_date" id="" onChange={(e) => handleChange(index, e)} value={exp.start_date}/>
              </div>
              <div className="form-group">
                <label htmlFor="end_date">End Date</label>
                <input type="date" name="end_date" id="" onChange={(e) => handleChange(index, e)} value={exp.end_date}/>
              </div>
            </div>

            <div className='form-row'>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="" onChange={(e) => handleChange(index, e)} value={exp.description}></textarea>
              </div>
            </div>
            <div className="form-btn">
              <button type="button" onClick={(e) => deleteExperience(index)}>Remove this entry</button>
            </div>
          </div>
        ))}

      <div className="section-divider"></div>

      <div className="form-btn">
        <button type="button" onClick={addExperience}>+ Add Another Experience</button>
      </div>
    </div>
  )
}

export default ExperienceForm