import "../../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Exo_2, Inter } from "next/font/google";
import HeadNavbar from "../navigation/navbar/HeadNavbar";

const exo = Exo_2({
    subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
export default async function NestedRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en">
            <body className={inter.className}>
                <HeadNavbar />
                {children}
            </body>
        </html>
    );
}
