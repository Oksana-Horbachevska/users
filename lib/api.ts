import { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    // Це обробить помилку автоматично через error.tsx (якщо створиш)
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
