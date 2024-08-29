import { Link } from "react-router-dom";
import "styles/main/Main.scss";
const Main = () => {
  return (
    <idv className="main-container">
      <div className="main-title-container">
        <span className="main-title">메인 페이지</span>
      </div>
      <div className="main-route-container">
        <Link to="todo">투두리스트</Link>
        <Link to="music">노래 차트 페이지</Link>
      </div>
    </idv>
  );
};

export default Main;
