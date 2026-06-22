import React from 'react'

function ResumePreview({personalInfo, experiences, education, skills}) {
  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1>{personalInfo.fullname}</h1>
        <p>{[personalInfo.email, personalInfo.phone, personalInfo.location].filter(Boolean).join(" | ")} {personalInfo.linkedin &&  <a href={`https://${personalInfo.linkedin}`}> | {personalInfo.linkedin}</a>}</p>
      </div>
      <div className="resume-divider"></div>

      {personalInfo.summary && (
        <div className="resume-section">
          <h2>SUMMARY</h2>
          <div className="resume-divider"></div>
          <p>{personalInfo.summary}</p>
        </div>
      )}

      {experiences.some((exp) => exp.job_title !== "") && (
        <div className="resume-section">
          <h2>EXPERIENCES</h2>
          <div className="resume-divider"></div>
          {experiences.map((exp) => (
            <div className="resume-entry" key={exp.start_date}>
              <div className="resume-entry-header">
                <span>{exp.job_title}</span>
                <span>{exp.company}</span>
              </div>
              <p className="resume-date">{exp.start_date} - {exp.end_date ? exp.end_date : "Present"}</p>
              <p>{exp.description}</p>
              <div className="section-divider"></div>
            </div>
          ))}
        </div>
      )}

      {education.some(edu => edu.school !== "") && (
        <div className="resume-section">
          <h2>EDUCATION</h2>
          <div className="resume-divider"></div>
          {education.map((edu) => (
            <div className="resume-entry" key={edu.degree}>
              <div className="resume-entry-header">
                <span>{edu.school}</span>
                <span>{edu.degree}</span>
              </div>
              <p className="resume-date">{edu.start_date} - {edu.end_date ? edu.end_date : "Present"}</p>
              <div className="section-divider"></div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className="resume-section">
          <h2>SKILLS</h2>
          <div className="resume-divider"></div>
          <div className="resume-skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResumePreview