import "@/~/styles/globals.css";
import lato from "../libs/fonts/lato";

import { type Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { CartStoreProvider } from "../libs/providers/cart-store-provider";

export const metadata: Metadata = {
  title: "StageFright",
  description: "Website for CSW BPA StageFright Project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lato.className}`}>
      <body>
        <CartStoreProvider>
          <Toaster />
          {children}
        </CartStoreProvider>
      </body>
    </html>
  );
}
