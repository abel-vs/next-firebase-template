import "./globals.css";
import { AuthContextProvider } from "./auth-context";
import { Roboto_Slab } from "next/font/google";
import LayoutProvider from "./layout-provider";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Template",
  description: "Waddup.",
  twitter: {
    card: "summary_large_image",
    title: "Template",
    description: "Waddup again.",
    creator: "@abelvansteenweghen",
  },
  metadataBase: new URL("https://domain.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthContextProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
