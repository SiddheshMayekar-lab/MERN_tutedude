import './App.css'
import useFetch from './hooks/useFetch'

// using jsonplaceholder as a free dummy API
const URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  // destructuring the three things my hook returns
  const { data, loading, error } = useFetch(URL)

  return (
    <div className="container">
      <h1>Task 29 - useFetch Hook</h1>
      <p>This page fetches users from a dummy API using my custom useFetch hook.</p>

      <div className="api-info">
        <strong>API URL:</strong> {URL}
      </div>

      {/* show loading text while waiting */}
      {loading && <p className="loading-text">Loading data...</p>}

      {/* show error if something broke */}
      {error && <p className="error-text">Error: {error}</p>}

      {/* only show the list once we have data */}
      {data && (
        <div>
          <h2>Users ({data.length} found)</h2>
          <div className="users-list">
            {data.map((user) => (
              <div className="user-card" key={user.id}>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* small section explaining what the hook returns */}
      <div className="hook-info">
        <h2>How the hook works</h2>
        <p>useFetch(url) returns three things:</p>
        <ul>
          <li><code>data</code> - the response from the API</li>
          <li><code>loading</code> - true while fetching, false when done</li>
          <li><code>error</code> - null normally, shows message if fetch fails</li>
        </ul>
      </div>
    </div>
  )
}

export default App
