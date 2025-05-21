import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <header className="text-[#0064A4] flex gap-4 items-center justify-center mb-8">
        <h1 className="font-bold text-6xl lg:text-8xl">UCI</h1>
        <h1 className="max-w-[15ch] text-2xl/6 mt-2 lg:text-4xl">
          University of California, Irvine
        </h1>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        className="flex flex-col items-center bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] w-xs px-8 pb-6 rounded-md lg:max-w-lg lg:w-full"
      >
        <h1 className="text-bold text-xl mb-6 pt-6 lg:text-3xl">
          Login with your UCInetID
        </h1>
        <input
          className="w-full p-4 border-gray-300 border rounded-md mb-4"
          placeholder="UCInetID"
        ></input>
        <input
          className="w-full p-4 border-gray-300 border rounded-md"
          placeholder="Password"
        ></input>
        <p className="text-xs lg:text-sm text-blue-700 self-start mb-4">
          Forgot your password?
        </p>
        <button className="bg-[#FFD200] text-[#0064A4] text-xl w-full py-4 rounded-md">
          Login
        </button>
        <div className="text-xs lg:text-sm flex flex-col justify-center items-center text-[#0064A4] mt-4 gap-2 lg:mb-6">
          <p>
            <span>Activate my UCnetID</span> •{" "}
            <span>Need help logging in?</span>
          </p>
          <p>View recent account activity</p>
        </div>
      </form>
      <p className="text-xs lg:text-sm text-[#0064A4] mt-12 lg:mt-24 gap-2">
        <span>Privacy Policy</span> • <span>OIT</span>
      </p>
    </div>
  );
}
