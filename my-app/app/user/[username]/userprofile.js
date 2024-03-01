export default function UserProfile({ data }) {
  const {
    id,
    username,
    perfs,
    createdAt,
    seenAt,
    playTime,
    url,
    count,
  } = data;

  return (
    <div>
      <h2>User Profile Information</h2>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
      <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
      <p>Last Seen At: {new Date(seenAt).toLocaleDateString()}</p>

      <h3>Performance Ratings</h3>
      <ul>
        {Object.entries(perfs).map(([category, info]) => (
          <li key={category}>
            {category}: Games - {info.games}, Rating - {info.rating}, RD - {info.rd}, Progress - {info.prog}
          </li>
        ))}
      </ul>

      <h3>Play Time</h3>
      <p>Total Play Time: {playTime.total} seconds</p>

      <h3>Game Counts</h3>
      <ul>
        {Object.entries(count).map(([type, value]) => (
          <li key={type}>{type}: {value}</li>
        ))}
      </ul>
    </div>
  );
}


