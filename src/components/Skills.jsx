import skillsImg from "../assets/language-svgrepo-com.svg";
import arrowUp from "../assets/arrow-up-340-svgrepo-com.svg";
import arrowDown from "../assets/arrow-down-338-svgrepo-com.svg";
import { useState } from "react";

let nextId = 0;
function Skills({ skillsList, setSkillsList, name, setName }) {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <div className="header">
        <img src={skillsImg} alt="skills-info" className="icon"></img>
        <h2>Skills:</h2>
        <button onClick={handleShowMore}>
          <img
            src={showMore ? arrowUp : arrowDown}
            alt="arrow"
            className="arrow"
          ></img>
        </button>
      </div>
      {showMore && (
        <div className="skills-comp">
          <h5 className="skills-add">Add new Skill (max 10)</h5>
          {skillsList.length < 10 && (
            <>
              <input
                className="skills-add"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
              />
              <button
                className="add-new-skill skills-add"
                onClick={() => {
                  setSkillsList([...skillsList, { id: nextId++, name: name }]);
                }}
              >
                Add
              </button>
            </>
          )}
          <ul className="skills-list">
            {skillsList.map((skill) => (
              <li key={skillsList.id}>
                {skill.name}
                <button
                  onClick={() => {
                    setSkillsList(skillsList.filter((a) => a.id !== skill.id));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Skills;
