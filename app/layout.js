import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Agam Riyandana | Portofolio",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: "agam, agamriyandana, my.id, domain Indonesia, Jember, pandi, portofolio, domain nusantara, digital, website, internasional, asia, eropa",
  authors: [{ name: 'Agam' }, { name: 'Riyandana', url: 'https://agamriyandana.my.id' }],
  creator: 'Agam Riyandana',
  publisher: 'Agam Riyandana',
  description: "I am a digital content creator and like new things.",
  icons: {
    icon: "https://github.com/agam-riyandana.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={poppins.className}>
        <Banner />
        <GoogleAnalytics gaId="G-B4Z3Q5WFD9" />
        <div vaul-drawer-wrapper="" className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div class="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
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
