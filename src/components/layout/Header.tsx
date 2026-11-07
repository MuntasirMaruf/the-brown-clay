export default async function Header() {
    return (
        <header className="sticky top-0 z-50 border-amber-800 border-2 bg-amber-500">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-start px-6 gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg  bg-amber-50 text-xs font-black tracking-wider text-amber-500">
                    B
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                    The Brown Clay
                </span>
            </div>
        </header>
    );
}