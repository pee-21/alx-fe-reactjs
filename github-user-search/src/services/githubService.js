import axios from "axios";

// Fetch GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Returns user object
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // Construct query string for GitHub Search API
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  const users = response.data.items;

  // Fetch additional details (location, repo count) for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
      return userDetails.data;
    })
  );

  return detailedUsers;
};
