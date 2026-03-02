// Analytics Helper Functions

export const trackFileUpload = (file_type: string, file_size_mb: number, tool_name: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
        window.gtag("event", "file_upload", {
            file_type: file_type,
            file_size_mb: Number(file_size_mb.toFixed(1)),
            tool_name: tool_name,
        });
    }
};

export const trackToolUsed = (tool_name: string, input_type: string, output_type: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
        window.gtag("event", "tool_used", {
            tool_name: tool_name,
            input_type: input_type,
            output_type: output_type,
        });
    }
};
