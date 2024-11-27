import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Team() {
  const team = [
    {
      name: "Agam Riyandana",
      role: "Content Creator",
      image: "https://cdn-sdotid.adg.id/images/6be810a2-46ed-4590-b3e8-804dc2bcbd7b_930x931.webp.jpeg?height=400&width=400",
      social: {
        facebook: "https://www.facebook.com/agamriyandana.id",
        instagram: "https://www.instagram.com/realagam1",
        linkedin: "https://www.linkedin.com/in/agam-riyandana",
      },
    },
    {
      name: "Ahmad Fahrezi",
      role: "Desain Grafis",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "https://www.instagram.com/fzynn_",
        linkedin: "#",
      },
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Tim Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">{member.name}</h2>
                <p className="text-gray-600 text-center mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link href={member.social.facebook} className="text-gray-600 hover:text-red-600">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.instagram} className="text-gray-600 hover:text-red-600">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-gray-600 hover:text-red-600">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

