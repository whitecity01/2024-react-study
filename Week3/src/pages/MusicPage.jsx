import Music from "components/music/Music";
import { useLoaderData } from "react-router-dom";
import { getTopChart } from "services/music";
import "styles/music/MusicPage.scss";

const MusicPage = () => {
  const topChart = useLoaderData();
  return (
    <div className="music-page-container">
      <Music tracks={topChart} />
    </div>
  );
};

export default MusicPage;

export const loader = async () => {
  const res = await getTopChart();
  if (res) {
    return res;
  }
  return [];
};
