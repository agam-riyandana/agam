import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main>
      <Hero />
      <Projects />
      <section className="px-6 md:px-20 lg:px-32 py-5">
        <div>
          <p className="text-sm text-center text-gray-400">Coded with ❤️ by <a className="underline hover:text-gray-300 transition" href="https://github.com/r2hu1">r2hu1</a></p>
        </div>
      </section>
    </main>
  );
}
