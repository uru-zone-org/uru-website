import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-center w-full px-4 uppercase text-sm sm:text-base lg:text-lg tracking-widest font-medium font-transducer-hairline-2">
      <Link href="/">
        <div
          className="
            w-20 h-20
            mask-[url('/URU_logo.svg')] mask-no-repeat mask-center mask-contain
          "
          style={{
            backgroundColor: 'var(--color-text)',
            backgroundSize: '100% 100%',
            backgroundPosition: '50% 50%',
          }}
          aria-hidden
        />
      </Link>
      <div className="flex-1 flex justify-center gap-10">
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
      <Link href="/contact" className="hover:underline">
        Contact
      </Link>
    </nav>
  );
}
