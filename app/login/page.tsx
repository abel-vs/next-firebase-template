"use client";
import SignInButton from "@/components/login/sign-in-button";
import { UserAuth } from "../auth-context";
import { redirect } from "next/navigation";
import React from "react";

export default function LogInPage() {
  const { user } = UserAuth();

  React.useEffect(() => {
    if (user) redirect("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="z-10 flex min-h-screen w-full flex-col items-center justify-center">
        <h1
          className="animate-fade-up text-center text-4xl font-black text-stone-800 opacity-0 drop-shadow-sm md:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Template
        </h1>
        <p
          className="mt-6 animate-fade-up text-center font-medium text-stone-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Next.js + Firebase
        </p>
        <div className="m-10">
          <SignInButton />
        </div>
      </div>
    </>
  );
}
