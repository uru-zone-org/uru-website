import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center items-center">
      <Link href="/">
        <div
          className="
            w-32 h-32
            sm:w-40 sm:h-40
            md:w-48 md:h-48    
            mask-[url('/URU_logo.svg')] mask-no-repeat mask-center mask-contain
            flex items-center justify-center
            scale-[3]

          "
          style={{
            backgroundColor: 'var(--color-text)',
            backgroundSize: '100% 100%',
            backgroundPosition: '50% 50%',
          }}
          aria-hidden
        />
      </Link>
    </div>
  );
}
