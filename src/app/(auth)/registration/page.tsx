import Heading from "@/components/ui/Heading";
import Note from "@/components/ui/Heading";

export default function RegistrationPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <p>Hi there from Registration Page!</p>
                <Heading title="Headeing Dashbaord" subtitle="This is the reg home page" />
            </main>
        </div>
    );
}
