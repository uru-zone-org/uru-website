import Link from "next/link";

export default function Nav() {
    return (
    <div className="w-100 h-30 mt-6 mb-2 flex items-center justify-center border border-black bg-transparent">
        <nav className="flex justify-center gap-6  font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </div>
    );
}