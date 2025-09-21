import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// Function to fetch GitHub user details
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
