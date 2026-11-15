"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand / Logo Slot */}
                <Link
                    href="/"
                    className="group flex gap-3 focus:outline-none"
                    aria-label="Lowbrow Screen Printing Home"
                >
                    <Image src="/lowbrow-new-logobw.jpg" alt="Logo" width={290} height={80} priority className="h-12 w-auto object-contain sm:h-14"
/>
                </Link>

                {/* Desktop Primary CTA */}
                <div className="hidden md:flex">
                    <a
                        href="#contact"
                        className="rounded-md bg-amber-400 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </header>
    )
}