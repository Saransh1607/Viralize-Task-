import axios from 'axios';

export async function fetchUser(username) {
  const res = await axios.get(`http://localhost:5000/api/profile/${username}`);
  return res.data;
}