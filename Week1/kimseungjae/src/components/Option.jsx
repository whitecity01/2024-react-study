import "../styles/Option.scss";
const Option = ({ pageType, setPageType }) => {
  return (
    <div className="option-select-container">
      <button
        type="button"
        className={pageType === "타이머" && "selected"}
        onClick={() => setPageType("타이머")}
      >
        타이머
      </button>
      <div className="divide-line" />
      <button
        type="button"
        className={pageType === "스톱워치" && "selected"}
        onClick={() => setPageType("스톱워치")}
      >
        스톱워치
      </button>
    </div>
  );
};

export default Option;
