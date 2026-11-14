"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand / Logo Slot */}
                <Link
                    href="/"
                    className="group flex gap-3 focus:outline-none"
                    aria-label="Lowbrow Screen Printing Home"
                >
                    {/* Replace this badge with <Image src="/logo.png" ... /> once Nigel provides his logo */}
                    <Image src="/lowbrow-new-logobw.jpg" alt="Logo" width={290} height={80} priority className="h-12 w-auto object-contain sm:h-14"
/>
                    {/* <div className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 font-black tracking-tighter text-amber-400 transition group-hover:border-amber-400">
                        LSP
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-extrabold uppercase tracking-wider text-white sm:text-lg">
                            Lowbrow
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                            Screen Printing
                        </span>
                    </div> */}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 m md:flex" aria-label="Primary Navigation">
                    {NAV_LINKS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium uppercase tracking-wider text-zinc-300 transition hover:text-amber-400"
                        >
                            {item.label}
                        </a>
                    ))}


                    <a
                        href="https://gravepact.shop"
                        target="_blank"
                        className="text-sm font-medium uppercase tracking-wider text-zinc-400 transition hover:text-white"
                    >
                        Merch Shop ↗
                    </a>
                </nav>

                {/* Desktop Primary CTA */}
                <div className="hidden md:flex">
                    <a
                        href="#contact"
                        className="rounded-md bg-amber-400 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
                    >
                        Request a Quote
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-md border border-zinc-800 p-2 text-zinc-300 hover:bg-zinc-900 hover:text-white md:hidden"
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Panel */}
            {mobileMenuOpen && (
                <div className="border-t border-zinc-800 bg-zinc-950 px-4 pb-6 pt-4 md:hidden">
                    <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
                        {NAV_LINKS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium uppercase tracking-wider text-zinc-200 hover:text-amber-400"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="https://gravepact.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium uppercase tracking-wider text-zinc-400 hover:text-white"
                        >
                            Merch Shop (Grave Pact) ↗
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 block w-full rounded-md bg-amber-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-zinc-950 hover:bg-amber-300"
                        >
                            Request a Quote
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}