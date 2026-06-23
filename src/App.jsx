import { useState } from "react"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import ExperienceForm from "./sections/ExperienceForm"
import PersonalInfoForm from "./sections/PersonalInfoForm"
import SkillsForm from "./sections/SkillsForm"
import EducationForm from "./sections/EducationForm"
import ResumePreview from "./components/ResumePreview"

function App() {
  const resumeRef = useRef();

  const [education, setEducation] = useState([
    {school: "", degree: "", start_date: "", end_date: ""}
  ]);

  const [experiences, setExperiences] = useState([
    {job_title: "", company: "", start_date: "", end_date: "", description: ""}
  ]);

  const [personalInfo, setPersonalInfo] = useState(
    {fullname: "", email: "", phone: "", location: "", linkedin: "", summary: ""}
  );

  const [skills, setSkills] = useState([]);
  
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${personalInfo.fullname}_Resume`
  })

  return (
    <div className="app-container">
      <div className="forms-panel">
        <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
        <ExperienceForm experiences={experiences} setExperiences={setExperiences}/>
        <EducationForm education={education} setEducation={setEducation}/>
        <SkillsForm skills={skills} setSkills={setSkills}/>
      </div>
      <div className="preview-panel">
        <button onClick={handlePrint}>Download PDF</button>
        <ResumePreview
          ref = {resumeRef}
          personalInfo={personalInfo}
          experiences={experiences}
          education={education}
          skills={skills}
        />
      </div>
    </div>
  )
}

export default App
