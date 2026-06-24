import React, { useState } from 'react'
import { improveDescription } from '../utils/ai_client';

function ExperienceForm({experiences, setExperiences}) {
  const [aiSuggestions, setAiSuggestions] = useState("");
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [erroIndex, setErrorIndex] = useState(null);

  function handleChange(index, e) {
    const updated = [...experiences];
    updated[index][e.target.name] = e.target.value;
    setExperiences(updated);
  }

  async function handleImprove(index) {
    if (experiences[index].description === "") return;
    try {
      setLoadingIndex(index);
      const result = await improveDescription(experiences[index].description)
      setAiSuggestions(result);
    } catch {
      setErrorIndex(index);
      setTimeout(()=> setErrorIndex(null), 5000);

    } finally {
      setLoadingIndex(null);
    }
  }

  function acceptAiSuggestion(index) {
    const updated = [...experiences];
    updated[index].description = aiSuggestions;
    setExperiences(updated);
    setAiSuggestions("");
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
                <div className="form-btn">
                  {exp.description && <button className='btn-ghost' disabled={loadingIndex === index} onClick={async() => await handleImprove(index)}>{loadingIndex===index ? "Improving..." : erroIndex === index ? "API is Down" : "Improve with AI"}</button>}
                </div>
                {!aiSuggestions ? "" : (
                  <div>
                    <textarea name="" id="" value={aiSuggestions || "AI is currently unavaialble"} disabled={true}></textarea>
                    <div className="form-btn">
                      <button onClick={() => acceptAiSuggestion(index)}>Accept</button>
                      <button onClick={() => setAiSuggestions("")}>Keep Original</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="form-btn">
              <button className="btn-danger" type="button" onClick={(e) => deleteExperience(index,e)}>Remove this entry</button>
            </div>
          </div>
        ))}

      <div className="section-divider"></div>

      <div className="form-btn">
        <button className="btn-ghost" type="button" onClick={addExperience}>+ Add Another Experience</button>
      </div>
    </div>
  )
}

export default ExperienceForm