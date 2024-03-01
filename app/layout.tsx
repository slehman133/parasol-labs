import "./globals.css";
import Provider from "./context/ClientProvider";
import GoogleAnalytics from "./components/googleanalytics/GoogleAnalytics";
import Google from "next-auth/providers/google";
import CookieBanner from "./components/cookiebanner/CookieBanner";
import { NextProviders } from "./NextProviders";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { Cookie, Exo_2, Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import HeadNavbar from "./components/navigation/navbar/HeadNavbar";
import Footer from "./components/navigation/footer/Footer";

const exo = Exo_2({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parasol Labs",
  description: "Generated by create next app",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" }, //May not need light/dark mode in the future, this is just a feature for accessibility reasons. 
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-2QHVKTJB8F" />
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </head>
      <body className={` ${inter.className}`}>
        <NextProviders
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <Provider session={session}>
            <CartProvider>
                <HeadNavbar />
              <main className="dark bg-background">{children}</main>
              <Footer />
            </CartProvider>
          </Provider>
          <CookieBanner />
        </NextProviders>
      </body>
    </html>
  );
}
