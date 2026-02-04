import { User } from "@/types/user";
import css from "./Users.module.css";

interface Props {
  initialUsers: User[];
}

const UsersClient = ({ initialUsers }: Props) => {
  return (
    <div className={css.section}>
      <ul className={css.list}>
        {initialUsers.map((user) => (
          <li key={user.id} className={css.card}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersClient;
