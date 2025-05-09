import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-10 font-transducer-hairline-2 text-base md:text-xl lg:text-2xl font-medium">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
