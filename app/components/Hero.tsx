import Image from "next/image"

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
                <Image
                    src="/lowbrow-banner4.png"
                    alt="Lowbrow Screen Printing"
                    className="w-full h-auto object-contain justify-center"
                    width={1200}
                    height={480}
                />
                {/* Action Buttons */}
                <div className="mt-12 flex justify-center items-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md bg-amber-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-300"
                    >
                        Get a Custom Quote
                    </a>
                </div>
            </div>
        </section>
    );
}