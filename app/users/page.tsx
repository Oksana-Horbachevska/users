import { getUsers } from "@/lib/api";
import UsersClient from "./Users.client";

const Users = async () => {
  const initialUsers = await getUsers();
  return <UsersClient initialUsers={initialUsers} />;
};

export default Users;
