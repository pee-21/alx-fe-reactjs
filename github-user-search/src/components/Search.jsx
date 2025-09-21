import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await fetchAdvancedUsers(username, location, repos);
      setResults(users);
    } catch (err) {
      setError("Looks like we can’t find the users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        🔍 GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 space-y-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((user) => (
              <li
                key={user.id}
                className="flex items-center space-x-4 border p-4 rounded shadow-sm"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-lg">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
