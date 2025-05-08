import Link from "next/link";

export default function Nav() {
    return (
    <div className="w-full h-full flex items-center justify-center">
        <nav className="flex justify-center gap-10 font-transducer-hairline-2 text-lg font-medium">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </nav>
    </div>
    );
}