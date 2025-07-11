import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { extractYoutubeId } from '../utils/youtube'; // ✅ YouTube ID extractor

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  const goToReviews = (movieId) => {
    navigate(`/Reviews/${movieId}`);
  };

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          const trailerId = extractYoutubeId(movie.trailerLink);

          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>

                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>

                    <div className="movie-buttons-container">
                      {trailerId && (
                        <Link to={`/Trailer/${trailerId}`}>
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
                      )}

                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => goToReviews(movie.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
