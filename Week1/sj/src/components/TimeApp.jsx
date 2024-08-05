import pause from "../assets/pause.png";
import play from "../assets/play.png";
import plus from "../assets/plus.png";
import stop from "../assets/stop.png";
import "../styles/TimeApp.scss";
const TimeApp = ({
  pageType,
  min10,
  min1,
  sec10,
  sec1,
  nano,
  setMin10,
  setMin1,
  setSec10,
  setSec1,
  setNano,
  startHandler,
  pauseHandler,
  plusHandler,
  stopHandler,
}) => {
  return (
    <>
      <span className="timeapp-header">{pageType}</span>
      <div className="timeapp-clock-container">
        <input
          type="number"
          value={min10}
          onChange={(e) => {
            setMin10(e.target.value % 10);
          }}
          disabled={pageType === "스톱워치"}
        />
        <input
          type="number"
          value={min1}
          onChange={(e) => {
            setMin1(e.target.value % 10);
          }}
          disabled={pageType === "스톱워치"}
        />
        :
        <input
          type="number"
          value={sec10}
          onChange={(e) => {
            setSec10(e.target.value % 10);
          }}
          disabled={pageType === "스톱워치"}
        />
        <input
          type="number"
          value={sec1}
          onChange={(e) => {
            setSec1(e.target.value % 10);
          }}
          disabled={pageType === "스톱워치"}
        />
        :
        <input
          type="number"
          value={nano}
          onChange={(e) => {
            setNano(e.target.value % 10);
          }}
          disabled={pageType === "스톱워치"}
        />
      </div>
      <div className="timeapp-button-container">
        <button>
          <img src={play} onClick={startHandler} />
        </button>
        <button>
          <img src={plus} onClick={plusHandler} />
        </button>
        <button>
          <img src={pause} onClick={pauseHandler} />
        </button>
        <button>
          <img src={stop} onClick={stopHandler} />
        </button>
      </div>
    </>
  );
};

export default TimeApp;
