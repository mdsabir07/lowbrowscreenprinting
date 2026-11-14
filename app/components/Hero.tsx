export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-800/80 bg-zinc-950 py-20 sm:py-28 lg:py-32">
            {/* Subtle Studio Background Grid & Amber Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    {/* Left Column: Niche Headline, Copy & CTAs */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            Custom Screen Printing Studio
                        </div>

                        <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                            Bold Ink.{" "}
                            <span className="text-amber-400">Hand-Pulled</span>{" "}
                            Precision.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                            High-opacity plastisol and water-based screen printing for independent clothing brands, touring bands, artists, and local businesses. Built to last wash after wash.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-md bg-amber-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-300"
                            >
                                Get a Custom Quote
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
                            >
                                Explore Services
                            </a>
                        </div>

                        {/* Print Shop Trust Highlights */}
                        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-8 sm:max-w-lg">
                            <div>
                                <p className="text-xl font-extrabold text-white sm:text-2xl">24+ pcs</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Low Minimums</p>
                            </div>
                            <div>
                                <p className="text-xl font-extrabold text-white sm:text-2xl">Up to 8</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Spot Colors</p>
                            </div>
                            <div>
                                <p className="text-xl font-extrabold text-white sm:text-2xl">7–10 Days</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Fast Turnaround</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hero Image / Print Spec Showcase Card */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 shadow-2xl">
                            {/* Swap this inner box with <Image src="/hero.jpg" ... /> once Nigel sends his hero photo */}
                            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-6 sm:p-8">
                                {/* Top Registration Marks */}
                                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                                    <span>⊕ REG // 305 MESH</span>
                                    <span className="rounded bg-amber-400/10 px-2 py-0.5 text-amber-400">
                                        INK READY
                                    </span>
                                </div>

                                {/* Center Graphic Placeholder */}
                                <div className="my-auto py-8 text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-amber-400/50 bg-amber-400/5">
                                        <span className="text-2xl font-black tracking-tighter text-amber-400">
                                            LSP
                                        </span>
                                    </div>
                                    <p className="text-lg font-extrabold uppercase tracking-wider text-white">
                                        Custom Apparel & Merch
                                    </p>
                                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                                        Tees • Hoodies • Totes • Posters
                                        <br />
                                        Simulated Process & Halftones
                                    </p>
                                </div>

                                {/* Bottom Color Swatch Bar */}
                                <div className="border-t border-zinc-800 pt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                                            Pantone Match
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-3.5 w-3.5 rounded-full bg-amber-400" title="Amber Ink" />
                                            <span className="h-3.5 w-3.5 rounded-full bg-white" title="High-Opacity White" />
                                            <span className="h-3.5 w-3.5 rounded-full bg-rose-500" title="Crimson Ink" />
                                            <span className="h-3.5 w-3.5 rounded-full bg-zinc-700" title="Charcoal Base" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}