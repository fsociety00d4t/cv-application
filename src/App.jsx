import { useState } from "react";
import Resume from "./components/Resume";
import FormTopLevel from "./components/FormTopLevel";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";

const initialSkills = [];
function App() {
  const [resumeBackgroundColor, setResumeBackgroundColor] = useState("#B79A9E");
  const [resumeFontColor, setResumeFontColor] = useState("black");
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    role: "",
    picure: null,
  });
  const [education, setEducation] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [skills, setSkills] = useState(initialSkills);
  const [name, setName] = useState("");

  const getBGColor = (e) => {
    setResumeBackgroundColor(e.target.value);
  };

  const getFontColor = (e) => {
    setResumeFontColor(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="form-top-level">
            <FormTopLevel
              getBGColor={getBGColor}
              getFontColor={getFontColor}
            ></FormTopLevel>
          </div>
          <div className="form-general-info">
            <GeneralInfo
              basic={basicInfo}
              setBasic={setBasicInfo}
            ></GeneralInfo>
          </div>
          <div className="education-info">
            <Education edu={education} setEdu={setEducation}></Education>
          </div>
          <div className="experience-info">
            <Experience
              experience={experience}
              setExperience={setExperience}
            ></Experience>
          </div>
          <div className="skills-info">
            <Skills
              skillsList={skills}
              setSkillsList={setSkills}
              name={name}
              setName={setName}
            ></Skills>
          </div>
        </div>
        <div className="resume">
          <Resume
            color={resumeBackgroundColor}
            fontColor={resumeFontColor}
            basic={basicInfo}
            educationInfo={education}
            experienceInfo={experience}
            skillsInfo={skills}
          ></Resume>
        </div>
      </div>
    </>
  );
}

export default App;
