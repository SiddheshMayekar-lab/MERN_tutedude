import './card.css';

function formatPrice(price) {
  if (typeof price === 'number') {
    return `\u20B9${price.toLocaleString('en-IN')}`;
  }

  return price;
}

function Card({ items = [] }) {
  if (!items.length) {
    return <p className="card-empty">No card data available.</p>;
  }

  return (
    <section className="card-grid" aria-label="Product cards">
      {items.map(({ id, title, description, price, category, image }) => (
        <article key={id} className="card-border">
          <div className="card">
            <img className="card__image" src={image} alt={title} loading="lazy" />
            <span className="card__label">{category ?? 'Featured'}</span>
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>

            <div className="card__footer">
              <span className="card__price">{formatPrice(price)}</span>
              <span className="card__meta">#{String(id).padStart(2, '0')}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Card;
