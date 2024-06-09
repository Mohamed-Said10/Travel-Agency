import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Header = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false, callbackUrl: "/auth/signin" });
    router.push("/auth/signin");
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl">Admin Panel</h1>
      <button onClick={handleSignOut} className="text-white">
        Sign out
      </button>
    </header>
  );
};

export default Header;
