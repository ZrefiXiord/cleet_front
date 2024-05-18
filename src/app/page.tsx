import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-evenly p-24">
      <div className="flex ">
        <Image
          src="/logo.svg"
          alt="Logo"
          width="400"
          height="400"
        />
      </div>
      <div className="flex w-3/6 justify-center items-center flex-col space-y-4 ">
        <p className="text-white text-5xl">You can register now.</p>
        <Link className="rounded-3xl text-center bg-violet-700 px-4 py-2 text-white font-medium transition-colors hover:bg-violet-800 w-full" href={"/register"}>
          Create account
        </Link>
        <p className="text-white text-lg">or</p>
        <Link className="rounded-3xl text-center bg-white px-4 py-2 text-violet-700 font-medium transition-colors hover:bg-slate-200 hover:text-violet-800 w-full" href={"/login"}>
          Login
        </Link>
      </div>
    </main>
  );
}
