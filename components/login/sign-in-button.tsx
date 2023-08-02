"use client";
import { UserAuth } from "@/app/auth-context";
import { Google, LoadingDots } from "../shared/icons";
import { useState } from "react";

export default function SignInButton() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <button
      disabled={signInClicked}
      className={`${
        signInClicked
          ? "cursor-not-allowed border-gray-200 bg-gray-100"
          : "border border-gray-200 bg-white text-black hover:bg-gray-50"
      } flex h-10 w-64 items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
      onClick={() => {
        setSignInClicked(true);
        googleSignIn();
      }}
    >
      {signInClicked ? (
        <LoadingDots color="#808080" />
      ) : (
        <>
          <Google className="h-5 w-5" />
          <p>Sign In with Google</p>
        </>
      )}
    </button>
  );
}
