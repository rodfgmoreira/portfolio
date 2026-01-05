import { SectionTitle } from "../section-title";

export function ContactForm() {
  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="itens-center text-center"
        />

        <form className="mt-12 w-full flex flex-col gap-4">
          <input
            placeholder="None"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-cyan-600"
          />
          <input
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-cyan-600"
          />
          <input
            placeholder="Mensagem"
            className="resize-none w-full h-[180px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-cyan-600"
          />
        </form>
      </div>
    </section>
  )
}