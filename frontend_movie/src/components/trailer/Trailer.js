import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
  const { ytTrailerId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="trailer-page">
      <button className="close-button" onClick={() => navigate(-1)}>
        ❌ Close
      </button>
      <div className="player-wrapper">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Trailer;
