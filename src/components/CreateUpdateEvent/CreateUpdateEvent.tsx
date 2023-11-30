import React from "react";
import { ReactComponent as Watch } from "../../assets/icons/clock-solid.svg";
import { ReactComponent as Pen } from "../../assets/icons/pen-solid.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar-solid.svg";
import "./CreateUpdateEvent.scss";
import Dropdown from "../Dropdown/Dropdown";

export default function CreateUpdateEvent() {
  const options = ["Course", "Exam", "Appointment"];
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  return (
    <div className="create-update-form">
      <p className="title-form">Add new event</p>
      <div className="form">
        <div className="input-form title-input">
          <Pen />
          <input placeholder="Enter event content" className="input" />
        </div>
        <div className="input-form time-input">
          <Watch />
          <input
            type="date"
            className="input"
            id="start"
            name="event-start"
            value="2023-11-30"
          />
          <span style={{ fontSize: "30px" }}>-</span>
          <input
            type="date"
            className="input"
            id="end"
            name="event-start"
            min="2023-11-30"
          />
        </div>
        <div className="input-form type-input">
          <Calendar />
          <Dropdown
            className="input"
            style={{ width: "100%" }}
            onOptionSelect={setSelectedOption}
            options={options}
          />
        </div>
      </div>
      <div className="bottom-button">
        <button className="cancel-button button">Cancel</button>
        <button className="save-button button">Save</button>
      </div>
    </div>
  );
}
