import { Poppins } from "next/font/google";
import "./globals.css";
import "./global-error.js";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Recaptcha from '../components/Recaptcha';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Agam Riyandana | Portofolio",
  generator: 'Next.js',
  manifest: 'https://agamriyandana.my.id/manifest.json',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: "agam, agamriyandana, my.id, domain Indonesia, Jember, pandi, portofolio, domain nusantara, digital, website, internasional, asia, eropa",
  authors: [{ name: 'Agam' }, { name: 'Riyandana', url: 'https://agamriyandana.my.id' }],
  creator: 'Agam Riyandana',
  publisher: 'Agam Riyandana',
  description: "Perkenalkan, saya Agam Riyandana. Dunia digital selalu menarik bagi saya. Sejak kecil, saya sudah tertarik dengan cara komputer bekerja dan cara perangkat Seluler Bekerja dan bagaimana teknologi dapat mengubah dunia. Kini, saya menyalurkan minat tersebut dengan menjadi [Kreator Digital]. Saya percaya bahwa desain yang baik tidak hanya menarik secara visual, tetapi juga fungsional dan mudah digunakan.",
  icons: {
    icon: "/agam.jpg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Banner />
        <Recaptcha />
        <div vaul-drawer-wrapper="" className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
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
