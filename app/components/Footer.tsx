"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {/* Column 1: Brand Summary */}
                    <div className="space-y-3">
                        <Link href="/" className="inline-block">
                            <span className="text-lg font-extrabold uppercase tracking-wider text-white">
                                Lowbrow Screen Printing
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                            Custom apparel, band merch, posters, and small-to-bulk screen printing runs crafted with precision.
                        </p>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-200">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#services" className="transition hover:text-amber-400">
                                    Print Services
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="transition hover:text-amber-400">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="transition hover:text-amber-400">
                                    Request a Quote
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://gravepact.shop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition hover:text-amber-400"
                                >
                                    Online Store (gravepact.shop) ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Direct Contact & Hours */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-200">
                            Inquiries
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Need custom pricing, garment specs, or artwork guidelines?
                        </p>
                        <div className="pt-1">
                            <a
                                href="#contact"
                                className="inline-flex items-center text-sm font-semibold text-amber-400 transition hover:text-amber-300"
                            >
                                Start a Print Order →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-6 text-xs text-zinc-500 sm:flex-row">
                    <p>© {currentYear} Lowbrow Screen Printing. All rights reserved.</p>
                    <p>Custom Screen Printing & Apparel</p>
                </div>
            </div>
        </footer>
    );
}