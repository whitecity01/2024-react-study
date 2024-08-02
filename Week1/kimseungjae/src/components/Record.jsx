import "../styles/Record.scss";
const Record = ({ record }) => {
  return (
    <>
      <span className="record-title">기록</span>
      <div className="record-list-container">
        <ul>
          {record.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Record;
