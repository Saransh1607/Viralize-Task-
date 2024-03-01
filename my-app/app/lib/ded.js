import { fetchUser } from "./api";

export  async function Ded(username) {
  const data = await fetchUser(username)
  return data;
}