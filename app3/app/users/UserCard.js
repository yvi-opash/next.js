import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "3px solid gray",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <img src={user.picture.medium}  />

      <Link href={`/users/${user.email}`}>
        <h3>
          {user.name.first} {user.name.last}
        </h3>
      </Link>

      <p>{user.email}</p>
      <p>{user.location.country}</p>
    </div>
  );
}
