import Link from "next/link";

export default function Header() {

    return (
<header className="w-100% h-100% flex items-center justify-center box-border border-b border-[color:var(--color-border)]">
    <Link href="/" className="flex items-center justify-center"></Link>
    <div
    className="
    w-[120px] h-[120px]
    mask-[url('/URU_logo.svg')] mask-no-repeat mask-center mask-contain
    scale-[2]
    flex items-center justify-center
    "
    style={{
        backgroundColor: 'var(--color-text)',
        backgroundSize: '100% 100%',
        backgroundPosition: '50% 50%',
    }}
    aria-hidden
    />
    <nav className="flex gap-6 font-medium text-[var(--color-text)]">

    </nav>
      </header>
      
    );
  }
  