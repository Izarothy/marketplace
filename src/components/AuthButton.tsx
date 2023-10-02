import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const AuthButton = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="flex items-center gap-2">
      <p className="text-center text-lg text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-2 text-sm font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default AuthButton;
