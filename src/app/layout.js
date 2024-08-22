import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "AnimalHub",
    template: "%d | AnimalHub",
  },
  description: "Discover, Filter, and Expand the World of Animals!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
