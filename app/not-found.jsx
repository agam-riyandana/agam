import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  )
}
