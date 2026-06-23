import React from 'react'
import { forwardRef } from 'react';

const ResumePreview = forwardRef(({personalInfo, experiences, education, skills}, ref) => {
  function formatDate(dateStr) {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-us", {month: "short", year: "numeric"});
  }
  return (
    <div className="resume-preview" ref={ref}>
      <div className="resume-header">
        <h1>{personalInfo.fullname}</h1>
        <p>{[personalInfo.email, personalInfo.phone, personalInfo.location].filter(Boolean).join(" | ")} {personalInfo.linkedin &&  <a href={`https://${personalInfo.linkedin}`}> | {personalInfo.linkedin}</a>}</p>
      </div>
      {personalInfo.fullname && (<div className="resume-divider"></div>)}

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
                <span className="resume-date">{formatDate(exp.start_date)} - {formatDate(exp.end_date)}</span>
              </div>
              <p className='company'>{exp.company}</p>
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
                <span className="resume-date">{formatDate(edu.start_date)} - {formatDate(edu.end_date)}</span>
              </div>
              <p>{edu.degree}</p>
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
              <span className='resume-skill' key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

export default ResumePreview