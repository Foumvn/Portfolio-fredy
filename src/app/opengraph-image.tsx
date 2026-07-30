import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = DATA.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 1200,
                    height: 630,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 700,
                        color: "#000000",
                    }}
                >
                    {DATA.name}
                </div>
                {DATA.description && (
                    <div
                        style={{
                            fontSize: 24,
                            color: "#666666",
                            marginTop: 16,
                            maxWidth: 800,
                            textAlign: "center",
                        }}
                    >
                        {DATA.description}
                    </div>
                )}
            </div>
        ),
        { ...size }
    );
}
