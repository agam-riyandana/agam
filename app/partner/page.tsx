import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Partner() {
  const partners = [
    { name: "TechCorp", logo: "/placeholder.svg?height=100&width=100", description: "Leading technology solutions provider" },
    { name: "DesignStudio", logo: "/placeholder.svg?height=100&width=100", description: "Creative design agency" },
    { name: "WebWizards", logo: "/placeholder.svg?height=100&width=100", description: "Expert web development team" },
  ]

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card key={partner.name}>
              <CardContent className="p-6 flex flex-col items-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
                <p className="text-gray-600 text-center">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

