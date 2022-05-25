import CardWrapper from "./card";
import meetingsJson from "./data/meetings.json";
import calendarStyle from "./css/calendar.css";
import Month from "./month";
import monthsJson from "./data/months.json";

let Calendar = () => {
  let getMeetings = () =>
    meetingsJson.map((meeting) => (
      <CardWrapper key={meeting.id} meeting={meeting} />
    ));

  let getMonths = () =>
    monthsJson.map((month, idx) => <Month key={idx} {...month} />);

  return (
    <>
      <div className="wrapper"> {getMonths()}</div>
      <div className="calendar" style={calendarStyle}>
        {getMeetings()}
      </div>
    </>
  );
};

export default Calendar;
