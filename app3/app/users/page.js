import { getUsers } from "../../lib/api";
import UserCard from "./UserCard";
import RefreshButton from "./RefreshButton";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h2>Users -Server </h2>

      <RefreshButton />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
