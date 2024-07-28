import { useState } from "react";
import Option from "../components/Option";
import Record from "../components/Record";
import TimeApp from "../components/TimeApp";
import useTimer from "../hooks/useTimer";
import "../styles/MainPage.scss";

const MainPage = () => {
  const [pageType, setPageType] = useState("타이머");
  const timerProps = useTimer(pageType);

  return (
    <div className="main-container">
      <div className="option-container">
        <Option pageType={pageType} setPageType={setPageType} />
      </div>

      <div className="timeapp-container">
        <TimeApp pageType={pageType} {...timerProps} />
      </div>

      <div className="record-container">
        <Record record={timerProps.record} />
      </div>
    </div>
  );
};

export default MainPage;
