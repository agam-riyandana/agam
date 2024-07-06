import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rahul Rajput",
  description: "I am a self thought full stack developer with a passion for creating modern and intuitive web applications.",
  icons: {
    icon: "https://github.com/r2hu1.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div vaul-drawer-wrapper="" className="antialiased bg-background">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer/>
            <Toaster position="top-right"/>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
