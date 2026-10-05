import { useState } from 'react';
import SearchInput from '../components/SearchInput.jsx';
import TypefaceCard from '../components/TypefaceCard.jsx';
import { typefaces } from '../data/typefaces.js';

export default function CatalogPage() {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTypefaces = typefaces.filter((typeface) =>
    typeface.name.toLowerCase().includes(normalizedQuery),
  );

  return (
    <section className="page">
      <header className="page__header">
        <h1 className="page__title">Каталог</h1>
        <p className="page__subtitle">
          {filteredTypefaces.length} из {typefaces.length}
        </p>
      </header>

      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="Поиск по названию"
      />

      {filteredTypefaces.length > 0 ? (
        <div className="grid">
          {filteredTypefaces.map((typeface) => (
            <TypefaceCard key={typeface.id} typeface={typeface} />
          ))}
        </div>
      ) : (
        <p className="empty">Ничего не найдено</p>
      )}
    </section>
  );
}
