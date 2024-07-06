import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <section className="h-[70vh] w-full flex items-center justify-center px-6">
            <div className="border p-4 rounded-md max-w-md">
                <h1 className="text-xl font-medium">Error 404 page not found!</h1>
                <p className="text-sm">something went wrong or the page does not exist.</p>
                <div className="flex items-center gap-3 mt-3">
                    <Button asChild><Link href="/">Go Home</Link></Button>
                </div>
            </div>
        </section>
    )
}