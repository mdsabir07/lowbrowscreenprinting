"use client";

import { useState, useRef } from "react";
import { sendQuoteAction } from "@/app/actions/sendQuote";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
    }

    function handleRemoveFile() {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Ensure the selected file is attached under "artwork"
        if (selectedFile) {
            formData.set("artwork", selectedFile);
        }

        const result = await sendQuoteAction(formData);

        if (result.success) {
            setStatus("sent");
            form.reset();         // Clears all text and textarea inputs natively
            setSelectedFile(null); // Clears the selected file state
            if (fileInputRef.current) {
                fileInputRef.current.value = ""; // Resets the hidden file input
            }
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Something went wrong. Please try again.");
        }
    }

    return (
        <section
            id="contact"
            className="relative bg-zinc-950 sm:py-20"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                        Start a Project
                    </span>
                    <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                        Request a Quote
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
                    {/* Left Column: Quote Request Form */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl sm:p-8 lg:col-span-7">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300"
                                >
                                    Name <span className="text-amber-400">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your full name"
                                    className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-amber-400 focus:outline-none"
                                />
                            </div>

                            {/* Email & Quantity Grid */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300"
                                    >
                                        Email <span className="text-amber-400">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-amber-400 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300"
                                    >
                                        How many items do you need printed{" "}
                                        <span className="text-amber-400">*</span>
                                    </label>
                                    <input
                                        id="quantity"
                                        name="quantity"
                                        type="text"
                                        required
                                        placeholder="e.g. 50 tees, 25 hoodies"
                                        className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-amber-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div>
                                <label
                                    htmlFor="project"
                                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300"
                                >
                                    Tell us about your project
                                </label>
                                <textarea
                                    id="project"
                                    name="project"
                                    rows={4}
                                    placeholder="Garment styles, ink colors, print placements (front, back, sleeve), or target deadline..."
                                    className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-amber-400 focus:outline-none"
                                />
                            </div>

                            {/* Artwork Upload Box */}
                            <div>
                                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300">
                                    Artwork File (Optional)
                                </span>
                                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-950/80 px-6 py-7 text-center transition hover:border-amber-400/60">
                                    <svg
                                        className="h-9 w-9 text-zinc-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                    </svg>

                                    <p className="mt-2 text-sm text-zinc-300">
                                        Upload an image{" "}
                                        <span className="text-zinc-500">
                                            (jpg, jpeg, svg and png — max 10MB)
                                        </span>
                                    </p>

                                    <input
                                        ref={fileInputRef}
                                        id="artwork"
                                        name="artwork"
                                        type="file"
                                        accept=".jpg,.jpeg,.svg,.png,image/jpeg,image/png,image/svg+xml"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                    {!selectedFile ? (
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="mt-4 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:border-amber-400 hover:text-amber-400 cursor-pointer"
                                        >
                                            Browse for Images
                                        </button>
                                    ) : (
                                        <div className="mt-4 flex items-center gap-3 rounded-md border border-amber-400/40 bg-amber-400/10 px-3.5 py-2 text-xs text-amber-300">
                                            <span className="max-w-[200px] truncate font-medium">
                                                {selectedFile.name}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="font-bold uppercase text-zinc-400 hover:text-white cursor-pointer"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full rounded-md bg-amber-400 py-3.5 text-sm font-extrabold uppercase tracking-widest text-zinc-950 transition hover:bg-amber-300 disabled:opacity-60 cursor-pointer"
                            >
                                {status === "submitting" ? "Sending Quote Request..." : "Submit"}
                            </button>

                            {status === "sent" && (
                                <div className="rounded-md border border-emerald-500/40 bg-emerald-500/10 p-4 text-center text-sm text-emerald-300">
                                    Quote request received! We’ll review your project details and get back to you shortly.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="rounded-md border border-red-500/40 bg-red-500/10 p-4 text-center text-sm text-red-300">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Right Column: Project Status, Turnaround Policy & Studio Details */}
                    <div className="space-y-6 lg:col-span-5">
                        {/* Accepting Projects Card */}
                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                Open for Orders
                            </div>

                            <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
                                We Are Accepting New Projects.
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                                Feel free to shoot us an email (or use this contact form) to get in touch with us and let us know about your project.
                            </p>

                            <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950/90 p-4 text-sm leading-relaxed text-zinc-400">
                                <p>
                                    Standard turnaround times vary, but typically complete around{" "}
                                    <strong className="font-semibold text-white">
                                        14 days after quote approval
                                    </strong>
                                    .
                                </p>
                                <p className="mt-2 italic text-zinc-400">
                                    Changes made to an order after a quote is approved are subject to additional fees.
                                </p>
                            </div>
                        </div>

                        {/* Studio Location & Direct Contact Card */}
                        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
                            <h3 className="text-lg font-black uppercase tracking-wider text-white">
                                Lowbrow Screen Printing
                            </h3>

                            <ul className="mt-5 space-y-4 text-sm text-zinc-300">
                                {/* Address */}
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    <span className="italic text-zinc-300">
                                        2871-A Soquel Ave. Santa Cruz, CA 95062
                                    </span>
                                </li>

                                {/* Phone */}
                                <li className="flex items-center gap-3">
                                    <svg
                                        className="h-5 w-5 shrink-0 text-amber-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                    <a
                                        href="tel:+18319005550"
                                        className="italic transition hover:text-amber-400"
                                    >
                                        (831) 900-5550
                                    </a>
                                </li>

                                {/* Email */}
                                <li className="flex items-center gap-3">
                                    <svg
                                        className="h-5 w-5 shrink-0 text-amber-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                    <a
                                        href="mailto:contact@lowbrowscreenprinting.com"
                                        className="underline decoration-zinc-600 underline-offset-4 transition hover:text-amber-400 hover:decoration-amber-400"
                                    >
                                        contact@lowbrowscreenprinting.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}