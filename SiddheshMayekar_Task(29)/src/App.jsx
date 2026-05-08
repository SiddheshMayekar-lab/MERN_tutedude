import "./App.css";
import useFetch from "./hooks/useFetch";

// api url
const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  // using custom hook here
  const { data, loading, error } = useFetch(API_URL);

  return (
    <div className="container">
      <h1>Custom useFetch Hook</h1>

      <p className="description">
        This project shows how to create and use a custom hook in React for
        fetching API data.
      </p>

      <div className="info-box">
        <p>
          <strong>API Used:</strong>
        </p>
        <p>{API_URL}</p>
      </div>

      {/* loading message */}
      {loading && <p className="message">Loading data...</p>}

      {/* error message */}
      {error && <p className="error">{error}</p>}

      {/* displaying fetched users */}
      {!loading && !error && (
        <div className="user-list">
          {data.map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Company:</strong> {user.company.name}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="hook-info">
        <h2>What I Learned</h2>

        <ul>
          <li>How to create a custom hook</li>
          <li>How useEffect works</li>
          <li>How to fetch API data</li>
          <li>How loading and error states are handled</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
