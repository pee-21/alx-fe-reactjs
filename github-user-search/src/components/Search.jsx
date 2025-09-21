// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { fetchAdvancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {user && (
          <div className="border rounded p-4 shadow-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

import { useState } from "react";
import { fetchAdvancedUserSearch } from "../services/githubService";


  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await fetchAdvancedUserSearch(username, location, minRepos);
      setResults(data.items); // GitHub Search API returns results in `items`
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 space-y-4"
      >
        <h1 className="text-xl font-bold text-center">GitHub User Search</h1>
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-4 border p-4 rounded-lg shadow-sm"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-semibold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );


{user && (
  <div style={{ border: "1px solid #ccc", padding: "10px" }}>
    <img src={user.avatar_url} alt={user.login} width={80} />
    <h2>{user.name || user.login}</h2>
    <p>@{user.login}</p>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      View GitHub Profile
    </a>
  </div>
)}
