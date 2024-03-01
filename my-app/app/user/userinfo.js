export default async function User(username) {
  const data = await ded(username);
  return data;
}