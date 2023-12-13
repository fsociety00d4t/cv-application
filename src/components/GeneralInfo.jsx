import infoImg from "../assets/customer-service-svgrepo-com.svg";
import arrowUp from "../assets/arrow-up-340-svgrepo-com.svg";
import arrowDown from "../assets/arrow-down-338-svgrepo-com.svg";
import { useState } from "react";

function GeneralInfo({ basic, setBasic }) {
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

  const handleBasicInfo = (e) => {
    e.preventDefault();
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;
    const role = document.getElementById("current-role").value;
    const img = document.getElementById("upload").value;

    let separateName = name.split(" ");
    setBasic({
      ...basic,
      name: separateName[0],
      lastName: separateName[1],
      email: email,
      phone: phone,
      country: country,
      role: role,
    });
  };

  const handleChange = (e) => {
    setBasic({ ...basic, picture: URL.createObjectURL(e.target.files[0]) });
  };
  return (
    <div>
      <div className="header">
        <img src={infoImg} alt="basic-info" className="icon"></img>
        <h2>General Info:</h2>
        <button onClick={handleShowMore}>
          <img
            src={showMore ? arrowUp : arrowDown}
            alt="arrow"
            className="arrow"
          ></img>
        </button>
      </div>
      {showMore && (
        <form className="general-info-comp">
          <div>
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              defaultValue={edit ? basic.name + " " + basic.lastName : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              defaultValue={edit ? basic.email : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              id="phone"
              defaultValue={edit ? basic.phone : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              defaultValue={edit ? basic.country : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="current-role">Current Role:</label>
            <input
              type="text"
              id="current-role"
              defaultValue={edit ? basic.role : ""}
            ></input>
          </div>
          <div>
            <label htmlFor="upload">Upload A Picture:</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="upload"
              onChange={handleChange}
            ></input>
          </div>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleBasicInfo}>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default GeneralInfo;
