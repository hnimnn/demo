import React from "react";
import AttendanceCard from "../../components/AttendanceCard/AttendanceCard";
import Calendar from "../../components/Calendar/Calendar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/reducers/eventSlice";
import "./StudentCalendar.scss";
import { selectAllEvent } from "../../redux/reducers/eventSlice";
import { EventType } from "../../utils/data";
const StudentCalendar = () => {
  const dispatch = useDispatch();
  const [handledData, setHandledData] = React.useState({
    presentNumber: 0,
    absentNumber: 0,
    lateNumber: 0,
    leaveNumber: 0,
  });
  const events = useSelector(selectAllEvent);
  React.useLayoutEffect(() => {
    const dataNumber = events.reduce(
      (accumulator, event) => {
        if (event.type === "Course") {
          switch (event.attendance) {
            case "present":
              accumulator.presentNumber++;
              break;
            case "absent":
              accumulator.absentNumber++;
              break;
            case "late":
              accumulator.lateNumber++;
              break;
            case "leave":
              accumulator.leaveNumber++;
              break;
          }
        }
        return accumulator;
      },
      {
        presentNumber: 0,
        absentNumber: 0,
        lateNumber: 0,
        leaveNumber: 0,
      }
    );
    setHandledData(dataNumber);
  }, []);
  const handleSubmit = (data: EventType) => {
    dispatch(addEvent(data));
  };
  return (
    <div className="student-calendar">
      <div className="page-title">Student calendar</div>
      <div className="analyst-data">
        <div className="total-course-card">
          <div className="card-number">
            {handledData.presentNumber +
              handledData.absentNumber +
              handledData.lateNumber +
              handledData.leaveNumber}
          </div>
          <div className="card-title">Total course</div>
        </div>
        <AttendanceCard
          title="Present"
          number={handledData.presentNumber}
          color="#31996C"
        />
        <AttendanceCard
          title="Absent"
          number={handledData.absentNumber}
          color="#E35757"
        />
        <AttendanceCard
          title="Late"
          number={handledData.lateNumber}
          color="#FF9911"
        />
        <AttendanceCard
          title="Leave"
          number={handledData.leaveNumber}
          color="#2C8BFF"
          className="card"
        />
        <div className="precent-card">
          <div className="card-number">
            82.05<span>%</span>
          </div>
          <div className="card-title">Percentage</div>
        </div>
      </div>
      <div className="calendar-section">
        <Calendar onSubmit={handleSubmit} events={events} />
      </div>
    </div>
  );
};
export default StudentCalendar;
