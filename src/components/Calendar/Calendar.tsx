import React, { useCallback, useMemo } from "react";
import "./Calendar.scss";
import { EventType, allHours } from "../../utils/data";
import {
  convertDate,
  displayRangeTime,
  convertRangeDates,
  getDate,
  getWeekNumber,
  handleEvents,
  initialDates,
  groupOverlappingEvents,
  calculateColumns,
  doesEventOverlapWithRightColumn,
} from "../../utils/function";
import { ReactComponent as Arrow } from "../../assets/icons/chevron-right-solid.svg";
import { ReactComponent as Exam } from "../../assets/icons/file-pen-solid.svg";
import { ReactComponent as Course } from "../../assets/icons/cubes-solid.svg";
import { ReactComponent as Appointment } from "../../assets/icons/calendar-check-solid.svg";
import { ReactComponent as Drop } from "../../assets/icons/caret-down-solid.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-alt-solid.svg";

import Dropdown from "../Dropdown/Dropdown";
import CardHover from "../CardHover/CardHover";
import Modal from "../Modal/Modal";
import CreateUpdateEvent from "../CreateUpdateEvent/CreateUpdateEvent";

function Calendar({ events }: { events: EventType[] }) {
  const [actived, setActived] = React.useState(() => convertDate(new Date()));
  const [currentWeek, setCurrentWeek] = React.useState(0);
  const inputDateRef = React.useRef<HTMLInputElement>(null);
  const [handledEvents, setHandledEvents] = React.useState(events);
  const options = ["Day", "Week", "Month"];
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [showed, setShowed] = React.useState({
    show: false,
    data: { date: "", time: 0 },
  });
  React.useLayoutEffect(() => {
    setHandledEvents(handleEvents(events));
  }, [events]);
  const renderBlockEvents = useCallback(
    (
      events: EventType[][],
      event: EventType[],
      hour: number,
      date: string,
      index: number
    ) => {
      return event.map((e: EventType, i: number) => {
        let widthFull = false;
        if (
          events.length > 2 &&
          index < events.length - 1 &&
          !doesEventOverlapWithRightColumn(
            e,
            events.slice(index + 1, events.length)
          )
        ) {
          widthFull = true;
        }

        if (e.start.date === date && e.start.time === hour) {
          const diff = e.end.time - e.start.time;
          return (
            <div
              key={i}
              style={{
                height: `calc(${(60 * 90) / 100 + 60 * (diff - 1)}px `,
                width: `calc(95%*${widthFull ? events.length - index : 1}/${
                  events.length
                })`,
                left: `calc(${(95 * index) / events.length}% + 2.5%)`,
              }}
              className={`card-wrap ${e.attendance || ""} ${
                widthFull ? index : ""
              }`}
            >
              <CardHover
                content={
                  <div className="card-hover">
                    <div className="card-hover-title">
                      {e.type === "Exam" ? (
                        <Exam />
                      ) : e.type === "Appointment" ? (
                        <Appointment />
                      ) : (
                        <Course />
                      )}
                      <span className="type-event">{e.type}</span>
                    </div>
                    <p>{e.content}</p>
                    <span className="time-event">{displayRangeTime(e.id)}</span>
                  </div>
                }
              >
                <div className="card">
                  <div className="title">
                    {e.type === "Exam" ? (
                      <Exam />
                    ) : e.type === "Appointment" ? (
                      <Appointment />
                    ) : (
                      <Course />
                    )}
                    <p>{e.type}</p>
                  </div>
                  <span>{e.content}</span>
                </div>
              </CardHover>
            </div>
          );
        } else {
          return "";
        }
      });
    },
    [currentWeek]
  );

  return (
    <div className="calendar">
      <div className="top">
        <div className="top-left">
          <button
            onClick={() => {
              setActived(convertDate(new Date()));
              setCurrentWeek(0);
            }}
            className="today"
          >
            <span>Today</span>
          </button>
          <div className="week-choosen">
            <button
              onClick={() => setCurrentWeek((prev) => prev - 1)}
              className="arrow-buton previous"
            >
              <Arrow />
            </button>
            <div className="week">
              <input
                ref={inputDateRef}
                type="date"
                value={actived}
                onChange={(e) => {
                  setActived(e.target.value || convertDate(new Date()));

                  setCurrentWeek(
                    getWeekNumber(e.target.value || convertDate(new Date()))
                  );
                }}
              />
              <div
                onClick={() => {
                  const { current: input } = inputDateRef;
                  input?.showPicker();
                }}
                className="display-week"
              >
                <span>{convertRangeDates(initialDates(currentWeek))}</span>
                <Drop />
              </div>
            </div>
            <button
              onClick={() => setCurrentWeek((prev) => prev + 1)}
              className="arrow-buton next"
            >
              <Arrow />
            </button>
          </div>
        </div>
        <div className="top-right">
          <Dropdown
            icon={<CalendarIcon width={14} height={14} />}
            options={options}
            onOptionSelect={setSelectedOption}
          />
        </div>
      </div>
      <div className="table">
        <div className="block time"></div>
        {initialDates(currentWeek).map((i, index) => (
          <div key={index} className="block head">
            <span className={`date ${actived === i.date ? "active" : ""}`}>
              {getDate(i.date).date}
            </span>
            <span className="day">{i.day}</span>
          </div>
        ))}
        {Array.from(Array(24).keys()).map((hour, index) => (
          <React.Fragment key={index}>
            <div className="block time">
              <span>{allHours[hour]}</span>
            </div>
            {initialDates(currentWeek).map((i, index) => (
              <div
                onClick={(e) => {
                  if (e.target !== e.currentTarget) return;
                  setShowed({ data: { time: hour, date: i.date }, show: true });
                }}
                key={index}
                className="block"
                data-date={hour + " " + i.date}
              >
                {groupOverlappingEvents(handledEvents).map((events, ind) => {
                  const eventsConverted = calculateColumns(events);
                  return (
                    <React.Fragment key={ind}>
                      {eventsConverted.map((event: any, index: number) => (
                        <React.Fragment key={index}>
                          {renderBlockEvents(
                            eventsConverted,
                            event,
                            hour,
                            i.date,
                            index
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  );
                })}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <Modal
        title="Add Event"
        showModal={showed.show}
        onClose={() => setShowed({ ...showed, show: false })}
      >
        <CreateUpdateEvent
          data={showed.data}
          setShowed={(value) => setShowed({ ...showed, show: value })}
        />
      </Modal>
    </div>
  );
}

export default Calendar;
