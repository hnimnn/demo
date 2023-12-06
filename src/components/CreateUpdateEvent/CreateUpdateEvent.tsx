import React, { useState } from "react";
import { ReactComponent as Watch } from "../../assets/icons/clock-solid.svg";
import { ReactComponent as Pen } from "../../assets/icons/pen-solid.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar-solid.svg";
import { ReactComponent as Attendance } from "../../assets/icons/users-between-lines-solid.svg";
import "./CreateUpdateEvent.scss";
import Dropdown from "../Dropdown/Dropdown";
import { EventType, allHours } from "../../utils/data";
import { isTimeValid } from "../../utils/function";
import ButtonCheckbox from "../ButtonCheckbox/ButtonCheckbox";

export type CreateUpdateEventType = {
  setShowed: (s: boolean) => void;
  data: dataNow;
  onSubmit?: (data: EventType) => void;
};
export type dataNow = {
  time: number;
  date: string;
};

export default function CreateUpdateEvent({
  setShowed,
  data,
  onSubmit,
}: CreateUpdateEventType) {
  const options = ["Course", "Exam", "Appointment"];
  const optionsHour = Array.from(Array(24).keys()).map(
    (hour) => allHours[hour]
  );
  const [formValue, setFormValue] = useState({
    content: "",
    type: options[0] as "Course" | "Exam" | "Appointment",
    attendance: "leave" as "present" | "absent" | "late" | "leave",
    start: {
      time: data.time,
      date: data.date,
    },
    end: { time: data.time + 1, date: data.date },
  });
  const [error, setError] = React.useState({
    content: false,
    time: false,
    type: false,
  });
  const handleOnSave = () => {
    console.log(formValue);
    if (formValue.content === "") {
      setError({ ...error, content: true });
      return;
    }
    if (error.content || error.time || error.type) return;
    if (onSubmit)
      onSubmit({
        id: 20,
        type: formValue.type,
        content: formValue.content,
        attendance: formValue.type === "Course" ? "leave" : undefined,
        start: {
          time: formValue.start.time,
          date: formValue.start.date,
        },
        end: {
          time: formValue.end.time,
          date: formValue.end.date,
        },
      });
    setShowed(false);
  };
  console.log(error);
  return (
    <div className="create-update-form">
      <p className="title-form">Add new event</p>
      <div className="form">
        <div className="input-form title-input">
          <Pen />
          <input
            placeholder="Enter event content"
            className="input"
            onChange={(e) => {
              if (e.target.value !== "") setError({ ...error, content: false });
              else setError({ ...error, content: true });
              setFormValue({ ...formValue, content: e.target.value });
            }}
          />
        </div>
        {error.content ? (
          <span className="error-message">Invalid input</span>
        ) : (
          <span></span>
        )}

        <div className="input-form time-input">
          <Watch />
          <input
            type="date"
            className="input"
            id="start-date"
            name="event-start"
            defaultValue={formValue.start.date}
            onChange={(e) => {
              if (
                isTimeValid(
                  formValue.start.time,
                  formValue.start.date,
                  formValue.end.time,
                  e.target.value
                )
              ) {
                setError({ ...error, time: false });
              } else {
                setError({ ...error, time: true });
              }
              setFormValue({
                ...formValue,
                start: {
                  ...formValue.start,
                  date: e.target.value,
                },
              });
            }}
          />
          <div className="dropdown-input">
            <Dropdown
              className="input"
              style={{ minWidth: "unset" }}
              onOptionSelect={(value) => {
                if (
                  isTimeValid(
                    Number(
                      Object.keys(allHours)[
                        Object.values(allHours).indexOf(value)
                      ]
                    ),
                    formValue.start.date,
                    formValue.end.time,
                    formValue.end.date
                  )
                ) {
                  setError({ ...error, time: false });
                } else {
                  setError({ ...error, time: true });
                }
                setFormValue({
                  ...formValue,
                  start: {
                    ...formValue.start,
                    time: Number(
                      Object.keys(allHours)[
                        Object.values(allHours).indexOf(value)
                      ]
                    ),
                  },
                });
              }}
              defaultOption={allHours[formValue.start.time]}
              options={optionsHour}
              styles={{ listStyle: { height: "200px", overflow: "auto" } }}
            />
          </div>
          <span style={{ fontSize: "30px" }}>-</span>
          <input
            type="date"
            className="input"
            id="end"
            name="event-start"
            defaultValue={formValue.start.date}
            onChange={(e) => {
              if (
                isTimeValid(
                  formValue.start.time,
                  formValue.start.date,
                  formValue.end.time,
                  e.target.value
                )
              ) {
                setError({ ...error, time: false });
              } else {
                setError({ ...error, time: true });
              }
              setFormValue({
                ...formValue,
                end: {
                  ...formValue.end,
                  date: e.target.value,
                },
              });
            }}
          />
          <div className="dropdown-input">
            <Dropdown
              className="input"
              style={{ minWidth: "unset" }}
              onOptionSelect={(value) => {
                if (
                  isTimeValid(
                    formValue.start.time,
                    formValue.start.date,
                    Number(
                      Object.keys(allHours)[
                        Object.values(allHours).indexOf(value)
                      ]
                    ),
                    formValue.end.date
                  )
                ) {
                  setError({ ...error, time: false });
                } else {
                  setError({ ...error, time: true });
                }
                setFormValue({
                  ...formValue,
                  end: {
                    ...formValue.end,
                    time: Number(
                      Object.keys(allHours)[
                        Object.values(allHours).indexOf(value)
                      ]
                    ),
                  },
                });
              }}
              defaultOption={allHours[formValue.end.time]}
              options={optionsHour}
              styles={{ listStyle: { height: "200px", overflow: "auto" } }}
            />
          </div>
        </div>
        {error.time ? (
          <span className="error-message">Invalid input</span>
        ) : (
          <span></span>
        )}

        <div className="input-form type-input">
          <Calendar />
          <Dropdown
            className="input"
            style={{ width: "100%" }}
            onOptionSelect={(value) =>
              setFormValue({
                ...formValue,
                type: value as "Course" | "Exam" | "Appointment",
              })
            }
            options={options}
          />
        </div>
        {error.type ? (
          <span className="error-message">Invalid input</span>
        ) : (
          <span></span>
        )}
        {formValue.type === "Course" ? (
          <div className="input-form attendance-input">
            <Attendance />
            <ButtonCheckbox
              disabled={true}
              onChange={(value) => {
                setFormValue({
                  ...formValue,
                  content: value as "present" | "absent" | "late" | "leave",
                });
              }}
              options={[
                { value: "leave", name: "Leave" },
                { value: "present", name: "Present" },
                { value: "absent", name: "Absent" },
                { value: "late", name: "Late" },
              ]}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bottom-button">
        <button
          className="cancel-button button"
          onClick={() => setShowed(false)}
        >
          Cancel
        </button>
        <button className="save-button button" onClick={handleOnSave}>
          Save
        </button>
      </div>
    </div>
  );
}
