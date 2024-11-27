import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Github", "Vercel", "Cloudfree", "VS Code", "V0 DEV"],
    },
  ]

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Keahlian</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet) => (
            <Card key={skillSet.category}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{skillSet.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-
3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

