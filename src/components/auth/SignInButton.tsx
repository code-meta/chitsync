"use client";

import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
 
const SignInButton = () => {
  return (
    <button
      className="flex items-center gap-2 bg-transparent border-2 border-cyan-600 hover:border-cyan-700 text-cyan-50 hover:text-cyan-100 font-inter font-medium tracking-wide px-4 py-2.5 rounded-md transition group"
      onClick={() => signIn("google")}
    >
      <AiOutlineGoogle
        className="text-cyan-50 group-hover:text-cyan-100"
        size={32}
      />
      <span>Continue With Google</span>
    </button>
  );
};

export default SignInButton;
