import { QRCodeSVG } from "qrcode.react";

export default function QRSticker() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#fff", // white background for clean printing
            }}
        >
            <QRCodeSVG
                value="https://extrabone.company"  // your link here
                size={300}                         // adjust for print size
                level="H"                          // high error correction
                bgColor="#ffffff"
                fgColor="#000000"
                includeMargin={true}
            />
        </div>
    );
}
