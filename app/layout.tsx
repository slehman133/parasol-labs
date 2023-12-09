import Navbar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Cookie, Exo_2, Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import Provider from "./context/ClientProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Exo } from "next/font/google";
import GoogleAnalytics from "./components/googleanalytics/GoogleAnalytics";
import Google from "next-auth/providers/google";
import CookieBanner from "./components/cookiebanner/CookieBanner";
const exo = Exo_2({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parasol Labs",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className="backgroundMain ">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-2QHVKTJB8F" />
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </head>
      <body className={inter.className}>
        <Provider session={session}>
          <CartProvider>
            <Navbar />
            {children}
            <CookieBanner/>
          </CartProvider>
        </Provider>
        <Footer></Footer>
      </body>
    </html >
  );
}
