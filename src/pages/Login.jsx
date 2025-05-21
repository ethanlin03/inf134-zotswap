import { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="">
      {showForm ? (
        <LoginForm />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          <img
            src="logo.png"
            className="p-4 max-w-3xl w-full h-auto"
            alt="Zot Swap"
          />
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-[#FFD200] text-[#0064A4] rounded-xl max-w-[250px] lg:max-w-md w-full py-4 px-6 text-lg font-semibold hover:cursor-pointer"
          >
            Login with DUO
          </button>
        </div>
      )}
    </div>
  );
}
