'use client';

import { toast } from "sonner";

export function copyString(text: string) {
    if (typeof window !== 'undefined') {
        if (navigator.clipboard && window.isSecureContext) {
            // Use the modern Clipboard API if available
            navigator.clipboard.writeText(text)
                .then(() => {
                    toast('Link copied to clipboard');
                })
                .catch(err => {
                    console.log(err);
                    toast('Failed to copy link');
                });
        } else {
            // Fallback method for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = text;
            // Ensure the textarea is not visible
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
                toast('Link copied to clipboard');
            } catch (err) {
                console.log(err);
                toast('Failed to copy link');
            }
            document.body.removeChild(textArea);
        }
    }
}
