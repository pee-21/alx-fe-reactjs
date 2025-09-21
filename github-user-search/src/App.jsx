import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchGitHubUser } from "./services/githubApi";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchGitHubUser(username);
    setUser(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}
 return (
    <div>
      <h1 style={{ textAlign: "center" }}>GitHub User Search</h1>
      <Search />
    </div>
  );

   return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Search />
    </div>
  );



export default App;

