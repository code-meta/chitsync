"use client";

import React from "react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/signin" })}>Logout</button>
  );
};

export default LogoutButton;
