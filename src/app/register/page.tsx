"use client"
import { FormEvent, useState } from "react";
import FormInput from "@/components/form/formInput";
import Link from "next/link";

export default function Register(){
    const [error, setError] = useState(false);
    function handleSubmit(e: FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            display_name: {value: string};
        };
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center">
        <div className="max-h-auto mx-auto max-w-xl">
            <div className="mb-8 space-y-3">
                <p className="text-xl font-semibold text-white">Register</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-10 space-y-3">
                    <div className="space-y-1">
                        <div className="space-y-2">
                           <FormInput name="Username" type="text" placeholder="elonmusk" error={error}/>
                           <FormInput name="Display name" type="text" placeholder="Elon Musk" error={error}/>
                           <FormInput name="Email" type="text" placeholder="elon@musk.com" error={error}/>
                           <FormInput name="Password" type="password" placeholder="" error={error}/>
                           <FormInput name="Repeated password" type="password" placeholder="" error={error}/>
                        </div>
                    </div>
                    <button type="submit" className="flex w-full items-center justify-center rounded-3xl bg-violet-700 px-4 py-2 text-white font-medium transition-colors hover:bg-violet-800" >Get started</button>
                </div>
            </form>
    
            <div className="text-center text-white"> Already signed up? <Link className="text-blue-500" href={"/login"}>Login</Link> </div>
        </div>
    </div>
    );
}