import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page not-found">
      <p className="not-found__code">404</p>
      <h1 className="page__title">Страница не найдена</h1>
      <p className="page__subtitle">
        Запрошенный адрес не существует или был удалён.
      </p>
      <Link to="/catalog" className="button">
        Перейти в каталог
      </Link>
    </section>
  );
}
