"use client"
import Heading from "@/components/ui/Heading";
import { useEffect, useState } from "react";

export default function CustomerDashboard() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // what to do
        document.title = `Clicked ${count} times`;
    }, [count === 10]); // why to do

    function incrementCount() {
        // count = count + 1;
        setCount(count + 1);
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Heading title="Customer Dashbaord" subtitle="This is the customer home page" />
                <br />

                <p>Count: {count}</p>

                <br />

                <button className="flex bg-blue-400 px-3 py-2" onClick={() => incrementCount()}>Increment</button>
            </main>
        </div>
    );
}
