"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-6xl min-w-0 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                {/* Brand / Logo Slot — always left-aligned */}
                <Link
                    href="/"
                    className="group flex min-w-0 flex-1 items-center justify-start focus:outline-none"
                    aria-label="Lowbrow Screen Printing Home"
                >
                    <Image
                        src="/lowbrow-new-logobw.jpg"
                        alt="Lowbrow Screen Printing Logo"
                        width={290}
                        height={80}
                        priority
                        className="h-10 w-auto max-w-[165px] object-contain object-left sm:h-14 sm:max-w-none"
                    />
                </Link>

                {/* Primary CTA — always right-aligned across all viewports */}
                <div className="flex shrink-0 items-center justify-end">
                    <a
                        href="#contact"
                        className="whitespace-nowrap rounded-md bg-amber-400 px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </header>
    )
}