import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Hubungi Saya</h1>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-red-600" />
                <p className="text-lg">agamriyandana7@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-red-600" />
                <p className="text-lg">Jl. Tempurejo Kota Jember, Indonesia</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

