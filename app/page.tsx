import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-gradient-to-br from-red-500 to-red-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Selamat Datang di Portfolio Saya
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Web Developer dengan passion dalam menciptakan pengalaman digital yang menarik dan inovatif
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contact">
              Hubungi Saya
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Project Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Project 1", link: "https://example.com/project1" },
              { id: 2, name: "Project 2", link: "https://example.com/project2" },
              { id: 3, name: "Project 3", link: "https://example.com/project3" }
            ].map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Project ${project.id}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Deskripsi singkat tentang project dan teknologi yang digunakan.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Lihat Detail
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

