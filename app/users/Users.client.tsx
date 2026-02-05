"use client";

import { User, UserFormData } from "@/types/user";
import css from "./Users.module.css";
import { useMemo, useState } from "react";
import UserEditForm from "@/components/UserEditForm/UserEditForm";

interface Props {
  initialUsers: User[];
}

const UsersClient = ({ initialUsers }: Props) => {
  const [users, setUsers] = useState<User[]>(initialUsers); //Local copy of users
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const cities = useMemo(() => {
    return Array.from(new Set(users.map((u) => u.address.city))); //Memoized list of unique cities
  }, [users]);

  //filtering function
  const filterUsers = (users: User[], search: string, city: string): User[] => {
    return users.filter((user) => {
      if (search) {
        const matchesName = user.name
          .toLowerCase()
          .includes(search.toLowerCase());

        if (!matchesName) return false;
      }

      if (city) {
        const matchesCity = user.address.city === city;
        if (!matchesCity) return false;
      }

      return true;
    });
  };

  // Memoized filtered users list
  const filteredUsers = useMemo(() => {
    return filterUsers(users, search, selectedCity);
  }, [users, search, selectedCity]);

  // Resets all filters
  const handleResetFilters = () => {
    setSearch("");
    setSelectedCity("");
  };

  //Handles user update from the edit form
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
      <div className={css.filterSection}>
        <input
          className={css.input}
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className={css.label}>
          City
          <select
            className={css.input}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All</option>
            {cities.map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className={css.resetButton}
          onClick={handleResetFilters}
        >
          Reset filters
        </button>
      </div>
      <ul className={css.list}>
        {filteredUsers.map((user) => (
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
