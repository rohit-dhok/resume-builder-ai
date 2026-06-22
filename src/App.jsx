import { useState } from "react"
import ExperienceForm from "./sections/ExperienceForm"
import PersonalInfoForm from "./sections/PersonalInfoForm"
import SkillsForm from "./sections/SkillsForm"
import EducationForm from "./sections/EducationForm"
import ResumePreview from "./components/ResumePreview"

function App() {
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
  

  return (
    <>
      <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
      <ExperienceForm experiences={experiences} setExperiences={setExperiences}/>
      <EducationForm education={education} setEducation={setEducation}/>
      <SkillsForm skills={skills} setSkills={setSkills}/>
      <ResumePreview 
        personalInfo={personalInfo}
        experiences={experiences}
        education={education}
        skills={skills}
      />
    </>
  )
}

export default App
