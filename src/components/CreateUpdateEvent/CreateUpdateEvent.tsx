import React, { useState } from "react";
import { ReactComponent as Watch } from "../../assets/icons/clock-solid.svg";
import { ReactComponent as Pen } from "../../assets/icons/pen-solid.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar-solid.svg";
import "./CreateUpdateEvent.scss";
import Dropdown from "../Dropdown/Dropdown";
import { allHours } from "../../utils/data";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/reducers/eventSlice";

export type CreateUpdateEventType = {
  setShowed: (s: boolean) => void;
  data: dataNow;
};
export type dataNow = {
  time: number;
  date: string;
};
export default function CreateUpdateEvent({
  setShowed,
  data,
}: CreateUpdateEventType) {
  const dispatch = useDispatch();
  const options = ["Course", "Exam", "Appointment"];
  const optionsHour = Array.from(Array(24).keys()).map(
    (hour) => allHours[hour]
  );
  const [formValue, setFormValue] = useState({
    content: "",
    type: options[0] as "Course" | "Exam" | "Appointment",
    start: {
      time: data.time,
      date: data.date,
    },
    end: { time: data.time + 1, date: data.date },
  });
  const handleOnSave = () => {
    console.log(formValue);
    dispatch(
      addEvent({
        id: 20,
        type: formValue.type,
        content: formValue.content,
        attendance: "leave",
        start: {
          time: formValue.start.time,
          date: formValue.start.date,
        },
        end: {
          time: formValue.end.time,
          date: formValue.end.date,
        },
      })
    );
    setShowed(false);
  };
  return (
    <div className="create-update-form">
      <p className="title-form">Add new event</p>
      <div className="form">
        <div className="input-form title-input">
          <Pen />
          <input
            placeholder="Enter event content"
            className="input"
            onChange={(e) =>
              setFormValue({ ...formValue, content: e.target.value })
            }
          />
        </div>
        <div className="input-form time-input">
          <Watch />
          <input
            type="date"
            className="input"
            id="start-date"
            name="event-start"
            defaultValue={formValue.start.date}
            disabled
          />
          <div className="dropdown-input">
            <Dropdown
              className="input"
              style={{ minWidth: "unset" }}
              onOptionSelect={(value) =>
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
                })
              }
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
            min={formValue.start.date}
            defaultValue={formValue.start.date}
            onChange={(e) => {
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
              onOptionSelect={(value) =>
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
                })
              }
              defaultOption={allHours[formValue.end.time]}
              options={optionsHour}
              styles={{ listStyle: { height: "200px", overflow: "auto" } }}
            />
          </div>
        </div>
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
