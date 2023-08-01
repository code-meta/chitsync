"use client";
import React from "react";

const SignInBg = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/assets/signin-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SignInBg;
