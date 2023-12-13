import eduImg from "../assets/education-cap-svgrepo-com.svg";
import arrowUp from "../assets/arrow-up-340-svgrepo-com.svg";
import arrowDown from "../assets/arrow-down-338-svgrepo-com.svg";
import { useState } from "react";
function Education({ edu, setEdu }) {
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

  const handleEducation = (e) => {
    e.preventDefault();
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    setEdu({
      ...edu,
      degree: degree,
      school: school,
      city: city,
      country: country,
      startDate: startDate,
      endDate: endDate,
    });
  };
  return (
    <div>
      <div className="header">
        <img src={eduImg} alt="edu-info" className="icon"></img>
        <h2>Education:</h2>
        <button onClick={handleShowMore}>
          <img
            src={showMore ? arrowUp : arrowDown}
            alt="arrow"
            className="arrow"
          ></img>
        </button>
      </div>
      {showMore && (
        <form className="education-comp">
          <div>
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              placeholder="Masters"
              id="degree"
              defaultValue={edit ? edu.degree : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="school">School:</label>
            <input
              type="text"
              id="school"
              defaultValue={edit ? edu.school : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              defaultValue={edit ? edu.city : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              placeholder="Usa"
              id="country"
              defaultValue={edit ? edu.country : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="start-date">Start date:</label>
            <input
              type="date"
              id="start-date"
              defaultValue={edit ? edu.startDate : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="end-date">End date:</label>
            <input
              type="date"
              id="end-date"
              defaultValue={edit ? edu.endDate : ""}
            ></input>
          </div>
          <div className="buttons">
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleEducation}>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Education;
