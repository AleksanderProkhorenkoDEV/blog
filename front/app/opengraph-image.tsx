import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "La casa del Junior";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a0a0a",
                    color: "#fff",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 64, fontWeight: 700 }}>
                    La casa del Junior
                </div>
                <div style={{ fontSize: 28, opacity: 0.7, marginTop: 20 }}>
                    Avances, errores y aprendizajes de un dev junior
                </div>
            </div>
        ),
        { ...size }
    );
}