import FormInput from "@/components/form/formInput";
import Link from "next/link";

export default function Register(){
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
                           <FormInput name="Display name" type="text" placeholder="Elon Mask"/>
                           <FormInput name="Email" type="text" placeholder="elon@musk.com"/>
                           <FormInput name="Birthdate" type="date" placeholder=""/>
                           <FormInput name="Password" type="password" placeholder=""/>
                           <FormInput name="Repeated password" type="password" placeholder=""/>
                           
                        </div>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-3xl bg-violet-700 px-4 py-2 text-white font-medium transition-colors hover:bg-violet-800" type="submit">Login</button>
                </div>
            </form>
    
            <div className="text-center"> Already signed up? <Link className="text-blue-500" href={"/login"}>Login</Link> </div>
        </div>
    </div>
    );
}