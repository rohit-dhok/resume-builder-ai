import React, { useState } from 'react'

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  function addSkill() {
    if (currentSkill === "") return;
    setSkills([...skills, currentSkill]);
    setCurrentSkill("");
  }

  function deleteSkill(index) {
    const updated = skills.filter((skill, idx) => index !== idx);
    setSkills(updated);
  }
  return (
    <div className="form-section">
      <h3 className="section-title">Skills</h3>
      <div className="section-divider"></div>

      <div className="skill-input">
        <input type="text" name="skill" onKeyDown={(e) => {if (e.key === "Enter"){addSkill()}}} onChange={(e) => setCurrentSkill(e.target.value)} value={currentSkill}/>
        <button onClick={addSkill}>+ Add</button>
      </div>

      <div className="skills-tags">
        {skills.length <= 0 ? "" : skills.map((skill, idx) => (
          <div className='tag' key={idx}>
            <p>{skill}</p>
            <button onClick={() => deleteSkill(idx)}>X</button>
          </div>
        ))}
          
          
      </div>
    </div>
  )
}

export default SkillsForm