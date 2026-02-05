"use client";

import { User, UserFormData } from "@/types/user";
import css from "./Users.module.css";
import { useState } from "react";
import UserEditForm from "@/components/UserEditForm/UserEditForm";

interface Props {
  initialUsers: User[];
}

const UsersClient = ({ initialUsers }: Props) => {
  // Save users to the local state to change
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const handleUpdateUser = (formData: UserFormData) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === editingUserId
          ? {
              ...u,
              name: formData.name,
              email: formData.email,
              address: { ...u.address, city: formData.city },
            }
          : u,
      ),
    );
    setEditingUserId(null); // close form
  };
  return (
    <div className={css.section}>
      <ul className={css.list}>
        {users.map((user) => (
          <li key={user.id} className={css.card}>
            <h3 className={css.userTitle}>{user.name}</h3>
            <p className={css.userEmail}>Email: {user.email}</p>
            <p className={css.userCity}>City: {user.address.city}</p>
            <button
              className={css.button}
              onClick={() => setEditingUserId(user.id)}
            >
              Edit
            </button>
            {editingUserId === user.id && (
              <UserEditForm
                user={user}
                onSave={handleUpdateUser}
                onCancel={() => setEditingUserId(null)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersClient;
