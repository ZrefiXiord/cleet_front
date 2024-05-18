"use client"

import FormInput from "@/components/form/formInput";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Login() {
    const [error, setError] = useState(false);
    function handleSubmit(e: FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        const target = e.target as typeof e.target & {
            login: { value: string };
            password: {value: string};
        };
        const password = target.password.value;
        const login = target.login.value;

        axios.post("http://localhost:8080/auth/login", {
            login: login,
            password: password
        })
        .then((res) => {
            setError(e => false);
            //route to timeline
        })
        .catch(e =>{
            setError(e => true);
        })
    }
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="max-h-auto mx-auto max-w-xl">
                <div className="mb-8 space-y-3">
                    <p className="text-xl text-white font-semibold">Enter the world</p>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-10 space-y-3">
                        <div className="space-y-1">
                            <div className="space-y-2">
                                <FormInput name="Login" type="text" placeholder="elonmusk" error={error}/>
                                <FormInput name="Password" type="password" placeholder="" error={error}/>
                            </div>
                        </div>
                        <button type="submit" className="flex w-full items-center justify-center rounded-3xl bg-violet-700 px-4 py-2 text-white font-medium transition-colors hover:bg-violet-800">Login</button>
                    </div>
                </form>
                <div className="text-center text-white"> No account? <Link className="text-blue-500" href={"/register"}>Create one</Link> </div>
            </div>
        </div>
    );
}