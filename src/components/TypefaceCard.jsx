import { Link } from 'react-router-dom';

export default function TypefaceCard({ typeface }) {
  return (
    <Link to={`/catalog/${typeface.id}`} className="card">
      <span className="card__category">{typeface.category}</span>
      <h2 className="card__title">{typeface.name}</h2>
      <p className="card__meta">
        {typeface.designer}, {typeface.year}
      </p>
    </Link>
  );
}
