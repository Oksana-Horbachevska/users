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
            <h3 className={css.userTitle}>{user.name}</h3>
            <p className={css.userEmail}>Email: {user.email}</p>
            <p className={css.userCity}>City: {user.address.city}</p>
            <button className={css.button}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersClient;
