import Heading from "@/components/ui/Heading";

export default function SellerDashboard() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Heading title="Seller Dashbaord" subtitle="This is the seller home page" body="This is the body of the heading." />
            </main>
        </div>
    );
}
