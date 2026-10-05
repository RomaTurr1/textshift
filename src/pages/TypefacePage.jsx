import { Link, useParams } from 'react-router-dom';
import { findTypefaceById } from '../data/typefaces.js';
import NotFoundPage from './NotFoundPage.jsx';

export default function TypefacePage() {
  const { id } = useParams();
  const typeface = findTypefaceById(id);

  if (!typeface) {
    return <NotFoundPage />;
  }

  return (
    <article className="page">
      <Link to="/catalog" className="back-link">
        ← Каталог
      </Link>

      <header className="page__header">
        <span className="card__category">{typeface.category}</span>
        <h1 className="page__title">{typeface.name}</h1>
      </header>

      <p className="detail__description">{typeface.description}</p>

      <dl className="detail__specs">
        <div className="detail__row">
          <dt>Дизайнер</dt>
          <dd>{typeface.designer}</dd>
        </div>
        <div className="detail__row">
          <dt>Год</dt>
          <dd>{typeface.year}</dd>
        </div>
        <div className="detail__row">
          <dt>Лицензия</dt>
          <dd>{typeface.license}</dd>
        </div>
      </dl>
    </article>
  );
}
