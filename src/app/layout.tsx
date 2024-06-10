import "~/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


import { GeistSans } from "geist/font/sans";
import { TopNav } from "./_components/topnav";

const inter = GeistSans;

export const metadata = {
  title: "T3 App",
  description: "Upload your images to the gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={"font-sans ${inter.variable} flex flex-col gap-4"}>
        <TopNav />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
