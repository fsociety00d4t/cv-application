function Resume({
  color,
  fontColor,
  basic,
  educationInfo,
  experienceInfo,
  skillsInfo,
}) {
  return (
    <div
      className="resume-comp"
      style={{ backgroundColor: color, color: fontColor }}
    >
      <div className="resume-basic">
        <img src={basic.picture} className="resume-photo" />
        <h3>
          Name: <span className="input">{basic.name}</span>
        </h3>
        <h3>
          Last Name: <span className="input">{basic.lastName}</span>
        </h3>
        <h3>
          Job: <span className="input">{basic.role}</span>
        </h3>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <h3>
          email: <span className="input">{basic.email}</span>
        </h3>
        <h3>
          Phone: <span className="input">{basic.phone}</span>
        </h3>
        <h3>
          Country : <span className="input">{basic.country}</span>
        </h3>
      </div>
      <div className="experience">
        <h1>Experience</h1>
        <h3>
          Job Title: <span className="input">{experienceInfo.title}</span>
        </h3>
        <h3>
          Company: <span className="input">{experienceInfo.company}</span>
        </h3>
        <h3>
          From: <span className="input">{experienceInfo.startDate}</span> to:{" "}
          <span className="input">{experienceInfo.endDate}</span>
        </h3>
        <h3>
          {" "}
          <span className="input">{experienceInfo.description}</span>{" "}
        </h3>
      </div>
      <div className="education">
        <h1>Education</h1>
        <h3>
          Degree: <span className="input">{educationInfo.degree}</span>
        </h3>
        <h3>
          {" "}
          School: <span className="input">{educationInfo.school}</span>
        </h3>
        <h3>
          City: <span className="input">{educationInfo.city}</span>
        </h3>
        <h3>
          Country: <span className="input">{educationInfo.country}</span>
        </h3>
        <h3>
          Date: <span className="input">{educationInfo.startDate}</span> to:{" "}
          <span className="input">{educationInfo.endDate}</span>
        </h3>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        {skillsInfo.map((skill) => (
          <li className="input" key={skill.id}>
            {skill.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Resume;
