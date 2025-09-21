const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
      <img src={user.avatar_url} alt={user.login} width={80} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
