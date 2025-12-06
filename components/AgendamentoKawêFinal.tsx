export default function AgendamentoKawêFinal() {
  const mensagemPadrao = "Olá Kawê! Gostaria de agendar uma sessão de massoterapia. Pode me informar sobre horários disponíveis?";

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#ccedf8]/20">
      <div className="max-w-4xl mx-auto">
        <div className="kawê-card bg-gradient-to-br from-white to-[#ccedf8]/30 border-[#8bcae8]/50">
          <div className="text-center">
            {/* Ícone */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ccedf8] to-[#8bcae8] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-4xl">📅</span>
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3e50]">
              Agende em{' '}
              <span className="text-[#ff8ba7]">3 passos</span>
            </h2>

            {/* Passos */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#ccedf8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">1. Me chama no WhatsApp</h3>
                <p className="text-[#2c3e50]/70">Já tenho uma mensagem pronta pra você</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#ff8ba7] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">2. Me conta sua necessidade</h3>
                <p className="text-[#2c3e50]/70">Juntos achamos a terapia ideal</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8bcae8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">3. Combinamos tudo</h3>
                <p className="text-[#2c3e50]/70">Horário, local e valores</p>
              </div>
            </div>

            {/* CTA PRINCIPAL */}
            <div className="mb-12">
              <a
                href={`https://wa.me/556196084063?text=${encodeURIComponent(mensagemPadrao)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 px-10 py-6 rounded-full bg-gradient-to-r from-[#ff8ba7] to-[#ff6b8b] text-white font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 w-full max-w-md mx-auto"
              >
                <span className="text-3xl">💬</span>
                AGENDAR AGORA
                <span className="text-3xl">✨</span>
              </a>
            </div>

            {/* SEÇÃO "NÃO SABE QUAL ESCOLHER?" INTEGRADA */}
            <div className="mt-12 pt-12 border-t border-[#ccedf8]">
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">
                Não sabe qual terapia escolher?
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left p-4 rounded-xl bg-[#ccedf8]/20">
                  <h4 className="font-bold text-[#2c3e50] mb-2 flex items-center gap-2">
                    <span className="text-[#ff8ba7]">✓</span>
                    Me conta seus sintomas
                  </h4>
                  <p className="text-[#2c3e50]/70 text-sm">
                    Dores específicas, estresse, cansaço, etc.
                  </p>
                </div>

                <div className="text-left p-4 rounded-xl bg-[#ccedf8]/20">
                  <h4 className="font-bold text-[#2c3e50] mb-2 flex items-center gap-2">
                    <span className="text-[#ff8ba7]">✓</span>
                    Eu te ajudo a escolher
                  </h4>
                  <p className="text-[#2c3e50]/70 text-sm">
                    Recomendo a terapia ideal para você
                  </p>
                </div>
              </div>

              <p className="text-[#2c3e50]/70 mb-6 max-w-2xl mx-auto">
                Não precisa saber todos os nomes das terapias!
                Basta me contar o que sente e eu encontro o tratamento perfeito.
              </p>

              <a
                href="https://wa.me/556196084063"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#ccedf8] to-[#8bcae8] text-[#2c3e50] font-bold text-lg hover:shadow-xl transition-shadow border border-[#8bcae8]"
              >
                <span>🤔</span>
                Me ajuda a escolher a terapia ideal
              </a>
            </div>

            {/* Informações */}
            <div className="mt-12 pt-8 border-t border-[#ccedf8]">
              <div className="space-y-4 text-[#2c3e50]/70">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#8bcae8]">✓</span>
                  Resposta em até 30 minutos
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#8bcae8]">✓</span>
                  Atendimento domiciliar - vou até você
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#8bcae8]">✓</span>
                  Aceito cartão de crédito/débito
                </p>
                <p className="flex items-center justify-center gap-2 text-sm">
                  <span className="text-[#ff8ba7]">🌈</span>
                  Espaço seguro para a comunidade LGBTQIA+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}