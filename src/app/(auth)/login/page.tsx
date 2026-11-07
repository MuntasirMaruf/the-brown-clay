import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-2 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <p>Hi there from Login Page!</p>
                <Link href="/customer" className="bg-blue-400 px-4 py-2">Login</Link>
            </main>
        </div>
    );
}
