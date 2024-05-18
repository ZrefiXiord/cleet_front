import FormInput from "@/components/form/formInput";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
    <div className="max-h-auto mx-auto max-w-xl">
        <div className="mb-8 space-y-3">
            <p className="text-xl font-semibold">Login</p>
        </div>
        <form className="w-full">
            <div className="mb-10 space-y-3">
                <div className="space-y-1">
                    <div className="space-y-2">
                       <FormInput name="Username" type="text" placeholder="elonmusk"/>
                       <FormInput name="Password" type="password" placeholder=""/>
                    </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-3xl bg-violet-700 px-4 py-2 text-white font-medium transition-colors hover:bg-violet-800" type="submit">Login</button>
            </div>
        </form>

        <div className="text-center"> No account? <Link className="text-blue-500" href={"/register"}>Create one</Link> </div>
    </div>
</div>
  );
}