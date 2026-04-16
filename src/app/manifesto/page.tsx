import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ManifestoHero, ManifestoBody } from "./_components/manifesto-content";

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 mix-blend-difference">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kaleidos
        </Link>
      </header>

      {/* Hero */}
      <section className="min-h-[85vh] flex items-end px-6 pb-24 pt-32">
        <div className="max-w-4xl mx-auto w-full">
          <ManifestoHero />
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pb-40">
        <div className="max-w-3xl mx-auto">
          <ManifestoBody />

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-black font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, #7CF067 0%, #D262B2 100%)",
              }}
            >
              Trabalhe com a gente
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/50 transition-colors"
            >
              Ver nossos cases
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
