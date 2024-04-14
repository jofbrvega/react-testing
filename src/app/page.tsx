"use client";

import { useState } from "react";

import { Item } from "@/types/Item";

import ShoppingCart from "@/components/Cart";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };

  return (
    <div className="home">
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}
