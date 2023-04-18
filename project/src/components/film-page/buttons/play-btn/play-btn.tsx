import { useNavigate } from 'react-router-dom';

function PlayBtn({filmId}: {filmId: number}): JSX.Element {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/player/${filmId}`)}
      className="btn btn--play film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayBtn;
