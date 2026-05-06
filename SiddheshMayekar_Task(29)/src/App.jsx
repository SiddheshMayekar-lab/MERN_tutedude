import './App.css'
import useFetch from './hooks/useFetch'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const { data, loading, error } = useFetch(API_URL)

  return (
    <main className="app-shell">
      <section className="intro-card">
        <p className="eyebrow">Task 29</p>
        <h1>Custom useFetch Hook</h1>
        <p className="intro-copy">
          A reusable hook that fetches data from an API and returns
          <code> data </code>,<code> loading </code>, and
          <code> error </code> states.
        </p>
        <div className="api-box">
          <span>Dummy API</span>
          <code>{API_URL}</code>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="panel-label">Live Demo</p>
            <h2>Fetched Users</h2>
          </div>
          <span
            className={`status-badge ${loading ? 'loading' : error ? 'error' : 'success'}`}
          >
            {loading ? 'Loading' : error ? 'Error' : 'Success'}
          </span>
        </div>

        {loading && (
          <p className="message">Fetching data from the API. Please wait...</p>
        )}

        {error && <p className="message error-message">{error}</p>}

        {!loading && !error && Array.isArray(data) && (
          <div className="user-grid">
            {data.map((user) => (
              <article className="user-card" key={user.id}>
                <p className="user-company">{user.company?.name}</p>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                  {user.website}
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="panel hook-summary">
        <p className="panel-label">Hook Output</p>
        <h2>What useFetch Returns</h2>
        <ul>
          <li>
            <code>data</code> stores the fetched API response.
          </li>
          <li>
            <code>loading</code> stays <code>true</code> while the request is in
            progress.
          </li>
          <li>
            <code>error</code> contains the error message if the request fails.
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
