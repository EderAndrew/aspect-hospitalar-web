"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { User } from "@/types/user.type";

type Props = {
  user: User;
};
export const AuthHydrator = ({ user }: Props) => {
  const { setUser } = useAuthStore((state) => state);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return null;
};
