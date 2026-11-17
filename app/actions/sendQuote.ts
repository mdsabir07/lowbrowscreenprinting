"use server";

export async function sendQuoteAction(formData: FormData) {
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const quantity = (formData.get("quantity") as string)?.trim();
    const project = (formData.get("project") as string)?.trim() || "No details provided";
    const artwork = formData.get("artwork") as File | null;

    if (!name || !email || !quantity) {
        return { success: false, error: "Please fill in all required fields." };
    }

    // Convert uploaded artwork (if any) to Base64 for Resend attachment
    const attachments: { filename: string; content: string }[] = [];

    if (artwork && artwork.size > 0) {
        // Keep well below Next.js/Resend payload limits (e.g., 10MB max)
        if (artwork.size > 10 * 1024 * 1024) {
            return {
                success: false,
                error: "Artwork file is too large (max 10MB). Please upload a smaller file or share a cloud link.",
            };
        }

        const arrayBuffer = await artwork.arrayBuffer();
        const base64Content = Buffer.from(arrayBuffer).toString("base64");

        attachments.push({
            filename: artwork.name,
            content: base64Content,
        });
    }

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Lowbrow Quotes <quotes@lowbrowscreenprinting.com>",
                to: ["sabiruli@gmail.com"],
                reply_to: email,
                subject: `New Quote Request from ${name} (${quantity})`,
                text: [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Quantity: ${quantity}`,
                    `Artwork Attached: ${attachments.length > 0 ? artwork?.name : "None"}`,
                    ``,
                    `Project Details:`,
                    project,
                ].join("\n"),
                ...(attachments.length > 0 && { attachments }),
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Resend API error:", errorData);
            return { success: false, error: "Failed to send quote request. Please try again." };
        }

        return { success: true };
    } catch (error) {
        console.error("Network error sending quote:", error);
        return { success: false, error: "Network error. Please try again." };
    }
}