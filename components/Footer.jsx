import Link from "next/link";

export default function Footer() {
    return (
        <section className="px-6 md:px-20 lg:px-32 py-5 mt-10 text-center border-t">
            <div>
                <p className="text-sm dark:text-gray-400 text-gray-600">&copy; {new Date().getFullYear()} <Link href="/" className="text-sm text-gray-400 underline">Agam Riyandana</Link> All Rights Reserved.</p>
            </div>
        </section>
    )
}
