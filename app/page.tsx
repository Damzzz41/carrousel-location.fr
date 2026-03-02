export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-neutral-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Location de Carrousel Ancien
        </h1>
        <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mb-8">
          Offrez une parenthèse enchantée à votre événement.  
          Mariages, événements prestige, collectivités et entreprises.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 transition rounded-full font-semibold"
          >
            Demander un devis
          </a>
          <a
            href="#prestations"
            className="px-8 py-3 border border-yellow-600 hover:bg-yellow-600/20 transition rounded-full"
          >
            Voir les prestations
          </a>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-24 px-6 bg-neutral-950 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-yellow-500">
          Un héritage d’élégance et de féerie
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-300 text-lg leading-relaxed mb-6">
          Depuis le XIXe siècle, le carrousel ancien fait rêver petits et grands.
          Lumières scintillantes, musique douce et chevaux finement sculptés
          transportent instantanément vos invités dans un univers intemporel.
        </p>
        <p className="max-w-3xl mx-auto text-neutral-400 text-lg leading-relaxed">
          Restaurés avec passion et respect des traditions, nos manèges anciens
          allient authenticité et sécurité moderne pour sublimer mariages,
          événements prestige et manifestations publiques.
        </p>
      </section>

      {/* PRESTATIONS */}
      <section id="prestations" className="py-24 px-6 bg-black">
        <h2 className="text-4xl text-center mb-12 text-yellow-500">
          Nos Prestations
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-neutral-900 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">
              Carrousel Mariage
            </h3>
            <p className="text-neutral-400">
              Une animation féerique pour un moment inoubliable.
            </p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">
              Événements Prestige
            </h3>
            <p className="text-neutral-400">
              Une attraction élégante pour sublimer votre réception.
            </p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">
              Collectivités & Villes
            </h3>
            <p className="text-neutral-400">
              Animation traditionnelle pour fêtes et événements publics.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-neutral-950 text-center">
        <h2 className="text-4xl text-yellow-500 mb-6">
          Demande de devis
        </h2>
        <p className="text-neutral-400 mb-8">
          Contactez-nous pour recevoir une proposition personnalisée.
        </p>
        <a
          href="mailto:contact@carrousel-location.fr"
          className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 transition rounded-full font-semibold"
        >
          Nous contacter
        </a>
      </section>

    </main>
  );
}
