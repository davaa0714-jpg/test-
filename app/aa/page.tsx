"use client"; // Client-side component

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// -------------------------------------------------------
// 1) Datatype тодорхойлно (API-гаас ирэх өгөгдөл)
// -------------------------------------------------------
type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);

  // -------------------------------------------------------
  // 2) Database-с өгөгдөл татах функц
  // -------------------------------------------------------
  const getUsers = async () => {
    try {
      const res = await fetch("/api/mangas"); // Next.js API endpoint
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // -------------------------------------------------------
  // 3) Компонент ажиллах үед users татах
  // -------------------------------------------------------
  useEffect(() => {
    getUsers();
  }, []);

  // -------------------------------------------------------
  // 4) Хэрэглэгч устгах (UI + Database)
  // -------------------------------------------------------
  const deleteUser = async (id: number) => {
    try {
      const res = await fetch(`/api/mangas/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");
      getUsers();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };  

  // -------------------------------------------------------
  // 5) Хэрэглэгч update хийх (UI + Database)
  // -------------------------------------------------------
  const updateUser = async (id: number) => {
    try {
      const res = await fetch(`/api/mangas/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: "Updated Name" }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to update user");

      // Шинэчилсэн өгөгдлийг дахин татна
      getUsers();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            {/* Avatar */}
            <img
              src={`https://robohash.org/${user.id}?set=set4&size=80x80`}
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              alt="avatar"
            />

            {/* User info */}
            <div>
              <strong>{user.name}</strong>
              <div style={{ color: "#666" }}>{user.email}</div>
              <div style={{ color: "#666" }}>{user.phone}</div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
              <Button onClick={() => updateUser(user.id)}>Update</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
