// src/services/githubService.js
import axios from "axios";

// Basic API call for a single user
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};

// Advanced Search (optional for later task)
export const fetchAdvancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching advanced search results");
  }
};

