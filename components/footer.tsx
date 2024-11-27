import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/agamriyandana.id" },
    { icon: FaSquareXTwitter, href: "https://twitter.com/agam_riyandana1" },
    { icon: Instagram, href: "https://instagram.com/realagam1" },
    { icon: Linkedin, href: "https://linkedin.com/agam-riyandana" },
    { icon: FaYoutube, href: "https://youtube.com/@agam_riyandana" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-red-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              )
            })}
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Agam Riyandana. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

