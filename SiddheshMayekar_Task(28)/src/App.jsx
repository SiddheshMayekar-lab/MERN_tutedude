import Card from '../components/card';
import data from '../data/data';
import './App.css';

function App() {
  return (
    <main className="app">
      <section className="app__header">
        <span className="app__eyebrow">Reusable Card Component</span>
        <h1 className="app__title">Product cards rendered from prop data</h1>
        <p className="app__description">
          The card component receives an array of objects as props and maps each
          item into a clean, gradient-bordered layout.
        </p>
      </section>

      <Card items={data} />
    </main>
  );
}

export default App;
