"use client"

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-2 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <p>Hi there from Login Page!</p>
                <input type="text" className="border-amber-300 border-2 text-white" value={email} placeholder="example@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p>Email: {email}</p>

                {/* <button className="bg-green-400 px-4 py-2" onClick={() => setCount(count + 1)}> +1</button> */}
                {/* <Link href="/customer" className="bg-blue-400 px-4 py-2">Login</Link> */}
            </main>
        </div>
    );
}
