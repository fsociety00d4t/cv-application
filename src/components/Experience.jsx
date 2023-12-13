import expImg from "../assets/office-briefcase-svgrepo-com.svg";
import arrowUp from "../assets/arrow-up-340-svgrepo-com.svg";
import arrowDown from "../assets/arrow-down-338-svgrepo-com.svg";
import { useState } from "react";

function Experience({ experience, setExperience }) {
  const [showMore, setShowMore] = useState(false);
  const [edit, isEdit] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
    isEdit(false);
  }

  function handleEdit(e) {
    e.preventDefault();
    isEdit(!edit);
  }

  function handleExperience(e) {
    e.preventDefault();
    const title = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const startDate = document.getElementById("start-date-exp").value;
    const endDate = document.getElementById("end-date-exp").value;
    const description = document.getElementById("description").value;

    setExperience({
      ...experience,
      title: title,
      company: company,
      startDate: startDate,
      endDate: endDate,
      description: description,
    });
  }

  function handleEdidt(e) {
    console.log(e);
  }

  function makeEdit(e) {
    console.log(e);
  }

  return (
    <div>
      <div className="header">
        <img src={expImg} alt="exp-info" className="icon"></img>
        <h2>Experience:</h2>
        <button onClick={handleShowMore}>
          <img
            src={showMore ? arrowUp : arrowDown}
            alt="arrow"
            className="arrow"
          ></img>
        </button>
      </div>
      {showMore && (
        <form className="experience-comp">
          <div>
            <label htmlFor="job-title">Job Title:</label>
            <input
              type="text"
              id="job-title"
              defaultValue={edit ? experience.title : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              defaultValue={edit ? experience.company : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="start-date-exp">Start Date:</label>
            <input
              type="date"
              id="start-date-exp"
              defaultValue={edit ? experience.startDate : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="end-date-exp">End Date:</label>
            <input
              type="date"
              id="end-date-exp"
              defaultValue={edit ? experience.endDate : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              placeholder="Describe your Job's responsibilities"
              id="description"
              defaultValue={edit ? experience.description : ""}
            ></textarea>
          </div>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleExperience}>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Experience;
