import "styles/music/Music.scss";

const Music = ({ tracks }) => {
  return (
    <div className="music-container">
      <h1>레전드 해외 음악 CHART..!</h1>
      <ul>
        {tracks.tracks.track.map((track, index) => (
          <li key={index}>
            <img src={track.image[0]["#text"]} alt={track.name} />
            <div>
              <h2>
                <a href={track.url}>{track.name}</a>
              </h2>
              <p>
                작곡가: <a href={track.artist.url}>{track.artist.name}</a>
              </p>
              <p>재생횟수: {track.playcount}</p>
              <p>리스너: {track.listeners}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Music;
