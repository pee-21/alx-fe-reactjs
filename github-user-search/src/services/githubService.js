import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Looks like we can't find the user");
  }

 const fetchAdvancedUsers = async (username, location, repos) => {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (repos) query += `repos:>=${repos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query.trim()}`
    );

    return response.data.items;
  } catch (error) {
    throw new Error("API request failed");
  }
};

};

