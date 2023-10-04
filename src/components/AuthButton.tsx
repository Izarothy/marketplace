import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

const AuthButton = () => {
  const { data: sessionData } = useSession();
  const userName = sessionData?.user?.name?.split(" ")[0];
  return (
    <div className="flex items-center gap-2">
      <p className="flex items-center gap-2 text-center text-lg text-white">
        {sessionData && (
          <Image
            src={sessionData.user.image ?? "htps://picsum.photos/32/32"}
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        {sessionData && <span className="text-sm">{userName}</span>}
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
